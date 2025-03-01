import path from 'path';
import postcss from 'postcss';
import { getStdin } from './get-stdin';
import { promises as fsp } from 'fs';
// Read from stdin and write to a file
export async function stdinToFs(plugin, argo, helpLogger) {
    let output = argo.output;
    if (!output && argo.outputDir) {
        output = path.join(argo.outputDir, 'output.css');
    }
    if (!output) {
        // no outputs, nothing to do
        process.exit(0);
    }
    try {
        const css = await getStdin();
        if (!css) {
            helpLogger();
            process.exit(1);
        }
        const result = await postcss([plugin]).process(css, {
            from: 'stdin',
            to: output,
            map: (argo.inlineMap || argo.externalMap) ? { inline: argo.inlineMap } : false,
        });
        result.warnings().forEach(warn => {
            console.warn(warn.toString());
        });
        if (argo.externalMap && result.map) {
            await Promise.all([
                await fsp.writeFile(output, result.css + (argo.inlineMap ? '\n' : '')),
                await fsp.writeFile(`${output}.map`, result.map.toString()),
            ]);
        }
        else {
            await fsp.writeFile(output, result.css + (argo.inlineMap ? '\n' : ''));
        }
    }
    catch (error) {
        console.error(argo.debug ? error : error.message);
        process.exit(1);
    }
    console.log(`CSS was written to "${path.normalize(output)}"`);
    process.exit(0);
}
