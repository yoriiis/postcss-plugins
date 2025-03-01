import type { Calculation } from '../calculation';
import type { ComponentValue, SimpleBlockNode, TokenNode } from '@csstools/css-parser-algorithms';
import type { Globals } from '../util/globals';
import { FunctionNode } from '@csstools/css-parser-algorithms';
export declare const mathFunctions: Map<string, typeof abs>;
export declare function calc(calcNode: FunctionNode | SimpleBlockNode, globals: Globals): Calculation | -1;
export declare function singleNodeSolver(fnNode: FunctionNode, globals: Globals, solveFn: (node: FunctionNode, a: TokenNode) => Calculation | -1): Calculation | -1;
export declare function twoCommaSeparatedNodesSolver(fnNode: FunctionNode, globals: Globals, solveFn: (node: FunctionNode, a: TokenNode, b: TokenNode) => Calculation | -1): Calculation | -1;
export declare function variadicNodesSolver(fnNode: FunctionNode, globals: Globals, solveFn: (node: FunctionNode, x: Array<ComponentValue>) => Calculation | -1): Calculation | -1;
export declare function clamp(clampNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function max(maxNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function min(minNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function round(roundNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function mod(modNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function rem(remNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function abs(absNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function sign(signNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function sin(sinNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function cos(codNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function tan(tanNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function asin(asinNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function acos(acosNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function atan(atanNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function atan2(atan2Node: FunctionNode, globals: Globals): Calculation | -1;
export declare function exp(expNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function sqrt(sqrtNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function pow(powNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function hypot(hypotNode: FunctionNode, globals: Globals): Calculation | -1;
export declare function log(logNode: FunctionNode, globals: Globals): Calculation | -1;
