/**
 * a node is both stored in the tree, and passed to functions to register nodes
 */
export interface Node {
    id?: string;
    parent?: string;
    index?: number;
    indexRange?: number[];
    selectAction?: any;
    isFocusable?: boolean;
    isWrapping?: boolean;
    orientation?: string;
    isIndexAlign?: boolean;
    onLeave?: Function;
    onEnter?: Function;
    activeChild?: string;
    children?: any;
}

export interface Override {
    id: string;
    direction: string;
    target: string;
}

export interface KeyEvent {
    keyCode: number;
    direction: string;
}

export interface InsertTreeOptions {
    maintainIndex: boolean;
}

export interface UnregisterNodeOptions {
    forceRefocus: boolean;
}