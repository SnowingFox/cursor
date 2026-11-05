// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/vendor/cursor-sdk-shared/tool-call-types.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: vendor/cursor-sdk-shared/tool-call-types.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.992Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import * as z from "zod/v3";
export declare const SimpleErrorSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip">;
export type SimpleError = z.infer<typeof SimpleErrorSchema>;
export type ResultSchema<TSuccess extends z.ZodType> = z.ZodDiscriminatedUnion<"status", [
    z.ZodObject<{
        status: z.ZodLiteral<"success">;
        value: TSuccess;
    }, "strip">,
    z.ZodObject<{
        status: z.ZodLiteral<"error">;
        error: z.ZodType;
    }, "strip">
]>;
export declare function createResultSchema<TSuccess extends z.ZodType>(successSchema: TSuccess, errorSchema?: z.ZodType): ResultSchema<TSuccess>;
export declare const ShellArgsSchema: z.ZodObject<{
    command: z.ZodString;
    workingDirectory: z.ZodOptional<z.ZodString>;
    timeout: z.ZodOptional<z.ZodNumber>;
}, "strip">;
export declare const ShellSuccessSchema: z.ZodObject<{
    exitCode: z.ZodNumber;
    signal: z.ZodString;
    stdout: z.ZodString;
    stderr: z.ZodString;
    executionTime: z.ZodNumber;
}, "strip">;
export declare const ShellResultSchema: ResultSchema<typeof ShellSuccessSchema>;
export declare const ShellToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"shell">;
    args: typeof ShellArgsSchema;
    result: z.ZodOptional<typeof ShellResultSchema>;
}, "strip">;
export type ShellArgs = z.infer<typeof ShellArgsSchema>;
export type ShellSuccess = z.infer<typeof ShellSuccessSchema>;
export type ShellResult = z.infer<typeof ShellResultSchema>;
export type ShellToolCall = z.infer<typeof ShellToolCallSchema>;
export declare const WriteArgsSchema: z.ZodObject<{
    path: z.ZodString;
    fileText: z.ZodString;
    returnFileContentAfterWrite: z.ZodOptional<z.ZodBoolean>;
}, "strip">;
export declare const WriteSuccessSchema: z.ZodObject<{
    path: z.ZodString;
    linesCreated: z.ZodNumber;
    fileSize: z.ZodNumber;
    fileContentAfterWrite: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const WriteResultSchema: ResultSchema<typeof WriteSuccessSchema>;
export declare const WriteToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"write">;
    args: typeof WriteArgsSchema;
    result: z.ZodOptional<typeof WriteResultSchema>;
}, "strip">;
export type WriteArgs = z.infer<typeof WriteArgsSchema>;
export type WriteSuccess = z.infer<typeof WriteSuccessSchema>;
export type WriteResult = z.infer<typeof WriteResultSchema>;
export type WriteToolCall = z.infer<typeof WriteToolCallSchema>;
export declare const DeleteArgsSchema: z.ZodObject<{
    path: z.ZodString;
}, "strip">;
export declare const DeleteSuccessSchema: z.ZodObject<{
    fileSize: z.ZodNumber;
}, "strip">;
export declare const DeleteResultSchema: ResultSchema<typeof DeleteSuccessSchema>;
export declare const DeleteToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"delete">;
    args: typeof DeleteArgsSchema;
    result: z.ZodOptional<typeof DeleteResultSchema>;
}, "strip">;
export type DeleteArgs = z.infer<typeof DeleteArgsSchema>;
export type DeleteSuccess = z.infer<typeof DeleteSuccessSchema>;
export type DeleteResult = z.infer<typeof DeleteResultSchema>;
export type DeleteToolCall = z.infer<typeof DeleteToolCallSchema>;
export declare const GlobArgsSchema: z.ZodObject<{
    targetDirectory: z.ZodOptional<z.ZodString>;
    globPattern: z.ZodString;
}, "strip">;
export declare const GlobSuccessSchema: z.ZodObject<{
    files: z.ZodArray<z.ZodString>;
    totalFiles: z.ZodNumber;
    clientTruncated: z.ZodBoolean;
    ripgrepTruncated: z.ZodBoolean;
}, "strip">;
export declare const GlobResultSchema: ResultSchema<typeof GlobSuccessSchema>;
export declare const GlobToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"glob">;
    args: typeof GlobArgsSchema;
    result: z.ZodOptional<typeof GlobResultSchema>;
}, "strip">;
export type GlobArgs = z.infer<typeof GlobArgsSchema>;
export type GlobSuccess = z.infer<typeof GlobSuccessSchema>;
export type GlobResult = z.infer<typeof GlobResultSchema>;
export type GlobToolCall = z.infer<typeof GlobToolCallSchema>;
export declare const GrepArgsSchema: z.ZodObject<{
    pattern: z.ZodString;
    path: z.ZodOptional<z.ZodString>;
    glob: z.ZodOptional<z.ZodString>;
    outputMode: z.ZodOptional<z.ZodString>;
    contextBefore: z.ZodOptional<z.ZodNumber>;
    contextAfter: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNumber>;
    caseInsensitive: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodString>;
    headLimit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    multiline: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodString>;
    sortAscending: z.ZodOptional<z.ZodBoolean>;
}, "strip">;
export declare const GrepContentMatchSchema: z.ZodObject<{
    file: z.ZodString;
    lineNumber: z.ZodOptional<z.ZodNumber>;
    line: z.ZodString;
    beforeContext: z.ZodOptional<z.ZodArray<z.ZodString>>;
    afterContext: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, "strip">;
export declare const GrepFileCountSchema: z.ZodObject<{
    file: z.ZodString;
    count: z.ZodNumber;
}, "strip">;
export declare const GrepContentOutputSchema: z.ZodObject<{
    matches: z.ZodArray<typeof GrepContentMatchSchema>;
    totalMatches: z.ZodNumber;
}, "strip">;
export declare const GrepFilesOutputSchema: z.ZodObject<{
    files: z.ZodArray<z.ZodString>;
    count: z.ZodNumber;
}, "strip">;
export declare const GrepCountOutputSchema: z.ZodObject<{
    counts: z.ZodArray<typeof GrepFileCountSchema>;
    total: z.ZodNumber;
}, "strip">;
export declare const GrepUnionResultSchema: z.ZodDiscriminatedUnion<"type", [
    z.ZodObject<{
        type: z.ZodLiteral<"content">;
        output: typeof GrepContentOutputSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"files">;
        output: typeof GrepFilesOutputSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"count">;
        output: typeof GrepCountOutputSchema;
    }, "strip">
]>;
export declare const GrepSuccessSchema: z.ZodObject<{
    workspaceResults: z.ZodOptional<z.ZodRecord<z.ZodString, typeof GrepUnionResultSchema>>;
    activeEditorResult: z.ZodOptional<typeof GrepUnionResultSchema>;
}, "strip">;
export declare const GrepResultSchema: ResultSchema<typeof GrepSuccessSchema>;
export declare const GrepToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"grep">;
    args: typeof GrepArgsSchema;
    result: z.ZodOptional<typeof GrepResultSchema>;
}, "strip">;
export type GrepArgs = z.infer<typeof GrepArgsSchema>;
export type GrepContentMatch = z.infer<typeof GrepContentMatchSchema>;
export type GrepFileCount = z.infer<typeof GrepFileCountSchema>;
export type GrepContentOutput = z.infer<typeof GrepContentOutputSchema>;
export type GrepFilesOutput = z.infer<typeof GrepFilesOutputSchema>;
export type GrepCountOutput = z.infer<typeof GrepCountOutputSchema>;
export type GrepUnionResult = z.infer<typeof GrepUnionResultSchema>;
export type GrepSuccess = z.infer<typeof GrepSuccessSchema>;
export type GrepResult = z.infer<typeof GrepResultSchema>;
export type GrepToolCall = z.infer<typeof GrepToolCallSchema>;
export declare const ReadArgsSchema: z.ZodObject<{
    path: z.ZodString;
}, "strip">;
export declare const ReadSuccessSchema: z.ZodObject<{
    content: z.ZodString;
    totalLines: z.ZodNumber;
    fileSize: z.ZodNumber;
}, "strip">;
export declare const ReadResultSchema: ResultSchema<typeof ReadSuccessSchema>;
export declare const ReadToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"read">;
    args: typeof ReadArgsSchema;
    result: z.ZodOptional<typeof ReadResultSchema>;
}, "strip">;
export type ReadArgs = z.infer<typeof ReadArgsSchema>;
export type ReadSuccess = z.infer<typeof ReadSuccessSchema>;
export type ReadResult = z.infer<typeof ReadResultSchema>;
export type ReadToolCall = z.infer<typeof ReadToolCallSchema>;
export declare const EditStrReplaceArgsSchema: z.ZodObject<{
    oldText: z.ZodString;
    newText: z.ZodString;
}, "strip">;
export declare const EditMultiStrReplaceEditSchema: z.ZodObject<{
    oldText: z.ZodString;
    newText: z.ZodString;
    replaceAll: z.ZodOptional<z.ZodBoolean>;
}, "strip">;
export declare const EditMultiStrReplaceArgsSchema: z.ZodObject<{
    edits: z.ZodArray<typeof EditMultiStrReplaceEditSchema>;
}, "strip">;
export declare const EditApplyPatchArgsSchema: z.ZodObject<{
    patchContent: z.ZodString;
}, "strip">;
export declare const EditApplyBasedArgsSchema: z.ZodObject<{}, "strip">;
export declare const EditArgsSchema: z.ZodObject<{
    path: z.ZodString;
}, "strip">;
export declare const EditSuccessSchema: z.ZodObject<{
    linesAdded: z.ZodOptional<z.ZodNumber>;
    linesRemoved: z.ZodOptional<z.ZodNumber>;
    diffString: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const EditResultSchema: ResultSchema<typeof EditSuccessSchema>;
export declare const EditToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"edit">;
    args: typeof EditArgsSchema;
    result: z.ZodOptional<typeof EditResultSchema>;
}, "strip">;
export type EditStrReplaceArgs = z.infer<typeof EditStrReplaceArgsSchema>;
export type EditMultiStrReplaceEdit = z.infer<typeof EditMultiStrReplaceEditSchema>;
export type EditMultiStrReplaceArgs = z.infer<typeof EditMultiStrReplaceArgsSchema>;
export type EditApplyPatchArgs = z.infer<typeof EditApplyPatchArgsSchema>;
export type EditApplyBasedArgs = z.infer<typeof EditApplyBasedArgsSchema>;
export type EditArgs = z.infer<typeof EditArgsSchema>;
export type EditSuccess = z.infer<typeof EditSuccessSchema>;
export type EditResult = z.infer<typeof EditResultSchema>;
export type EditToolCall = z.infer<typeof EditToolCallSchema>;
export declare const LsArgsSchema: z.ZodObject<{
    path: z.ZodString;
    ignore: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, "strip">;
export declare const LsDirectoryTreeNodeFileSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip">;
export type LsDirectoryTreeNode = {
    absPath: string;
    childrenDirs: LsDirectoryTreeNode[];
    childrenFiles: z.infer<typeof LsDirectoryTreeNodeFileSchema>[];
    childrenWereProcessed: boolean;
    fullSubtreeExtensionCounts: Record<string, number>;
    numFiles: number;
};
export declare const LsDirectoryTreeNodeSchema: z.ZodType<LsDirectoryTreeNode>;
export declare const LsSuccessSchema: z.ZodObject<{
    directoryTreeRoot: typeof LsDirectoryTreeNodeSchema;
}, "strip">;
export declare const LsResultSchema: ResultSchema<typeof LsSuccessSchema>;
export declare const LsToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"ls">;
    args: typeof LsArgsSchema;
    result: z.ZodOptional<typeof LsResultSchema>;
}, "strip">;
export type LsArgs = z.infer<typeof LsArgsSchema>;
export type LsDirectoryTreeNodeFile = z.infer<typeof LsDirectoryTreeNodeFileSchema>;
export type LsSuccess = z.infer<typeof LsSuccessSchema>;
export type LsResult = z.infer<typeof LsResultSchema>;
export type LsToolCall = z.infer<typeof LsToolCallSchema>;
export declare const DiagnosticSeveritySchema: z.ZodEnum<["error", "warning", "information", "hint"]>;
export declare const PositionSchema: z.ZodObject<{
    line: z.ZodOptional<z.ZodNumber>;
    character: z.ZodOptional<z.ZodNumber>;
}, "strip">;
export declare const DiagnosticRangeSchema: z.ZodObject<{
    start: z.ZodOptional<typeof PositionSchema>;
    end: z.ZodOptional<typeof PositionSchema>;
}, "strip">;
export declare const DiagnosticItemSchema: z.ZodObject<{
    severity: typeof DiagnosticSeveritySchema;
    range: z.ZodOptional<typeof DiagnosticRangeSchema>;
    message: z.ZodString;
    source: z.ZodString;
    code: z.ZodString;
}, "strip">;
export declare const FileDiagnosticsSchema: z.ZodObject<{
    path: z.ZodString;
    diagnostics: z.ZodArray<typeof DiagnosticItemSchema>;
    diagnosticsCount: z.ZodNumber;
}, "strip">;
export declare const ReadLintsArgsSchema: z.ZodObject<{
    paths: z.ZodArray<z.ZodString>;
}, "strip">;
export declare const ReadLintsSuccessSchema: z.ZodObject<{
    fileDiagnostics: z.ZodArray<typeof FileDiagnosticsSchema>;
    totalFiles: z.ZodNumber;
    totalDiagnostics: z.ZodNumber;
}, "strip">;
export declare const ReadLintsResultSchema: ResultSchema<typeof ReadLintsSuccessSchema>;
export declare const ReadLintsToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"readLints">;
    args: typeof ReadLintsArgsSchema;
    result: z.ZodOptional<typeof ReadLintsResultSchema>;
}, "strip">;
export type DiagnosticSeverity = z.infer<typeof DiagnosticSeveritySchema>;
export type Position = z.infer<typeof PositionSchema>;
export type DiagnosticRange = z.infer<typeof DiagnosticRangeSchema>;
export type DiagnosticItem = z.infer<typeof DiagnosticItemSchema>;
export type FileDiagnostics = z.infer<typeof FileDiagnosticsSchema>;
export type ReadLintsArgs = z.infer<typeof ReadLintsArgsSchema>;
export type ReadLintsSuccess = z.infer<typeof ReadLintsSuccessSchema>;
export type ReadLintsResult = z.infer<typeof ReadLintsResultSchema>;
export type ReadLintsToolCall = z.infer<typeof ReadLintsToolCallSchema>;
export declare const McpArgsSchema: z.ZodObject<{
    args: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    providerIdentifier: z.ZodOptional<z.ZodString>;
    toolName: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const McpToolResultContentItemSchema: z.ZodObject<{
    text: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
    }, "strip">>;
    image: z.ZodOptional<z.ZodObject<{
        data: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
    }, "strip">>;
}, "strip">;
export declare const McpSuccessSchema: z.ZodObject<{
    content: z.ZodArray<typeof McpToolResultContentItemSchema>;
    isError: z.ZodBoolean;
}, "strip">;
export declare const McpResultSchema: ResultSchema<typeof McpSuccessSchema>;
export declare const McpToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"mcp">;
    args: typeof McpArgsSchema;
    result: z.ZodOptional<typeof McpResultSchema>;
}, "strip">;
export type McpArgs = z.infer<typeof McpArgsSchema>;
export type McpToolResultContentItem = z.infer<typeof McpToolResultContentItemSchema>;
export type McpSuccess = z.infer<typeof McpSuccessSchema>;
export type McpResult = z.infer<typeof McpResultSchema>;
export type McpToolCall = z.infer<typeof McpToolCallSchema>;
export type McpProviderId = string;
export type McpToolId = string;
export declare const SemSearchArgsSchema: z.ZodObject<{
    query: z.ZodString;
    targetDirectories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    explanation: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const SemSearchSuccessSchema: z.ZodObject<{
    results: z.ZodString;
}, "strip">;
export declare const SemSearchResultSchema: ResultSchema<typeof SemSearchSuccessSchema>;
export declare const SemSearchToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"semSearch">;
    args: typeof SemSearchArgsSchema;
    result: z.ZodOptional<typeof SemSearchResultSchema>;
}, "strip">;
export type SemSearchArgs = z.infer<typeof SemSearchArgsSchema>;
export type SemSearchSuccess = z.infer<typeof SemSearchSuccessSchema>;
export type SemSearchResult = z.infer<typeof SemSearchResultSchema>;
export type SemSearchToolCall = z.infer<typeof SemSearchToolCallSchema>;
export declare const GenerateImageArgsSchema: z.ZodObject<{
    description: z.ZodString;
    filePath: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const GenerateImageSuccessSchema: z.ZodObject<{
    filePath: z.ZodString;
    imageData: z.ZodString;
}, "strip">;
export declare const GenerateImageErrorSchema: z.ZodObject<{
    error: z.ZodString;
}, "strip">;
export declare const GenerateImageResultSchema: ResultSchema<typeof GenerateImageSuccessSchema>;
export declare const GenerateImageToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"generateImage">;
    args: typeof GenerateImageArgsSchema;
    result: z.ZodOptional<typeof GenerateImageResultSchema>;
}, "strip">;
export type GenerateImageArgs = z.infer<typeof GenerateImageArgsSchema>;
export type GenerateImageSuccess = z.infer<typeof GenerateImageSuccessSchema>;
export type GenerateImageResult = z.infer<typeof GenerateImageResultSchema>;
export type GenerateImageToolCall = z.infer<typeof GenerateImageToolCallSchema>;
export declare const CreatePlanArgsSchema: z.ZodObject<{
    plan: z.ZodString;
}, "strip">;
export declare const CreatePlanSuccessSchema: z.ZodObject<{}, "strip">;
export declare const CreatePlanResultSchema: ResultSchema<typeof CreatePlanSuccessSchema>;
export declare const CreatePlanToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"createPlan">;
    args: typeof CreatePlanArgsSchema;
    result: z.ZodOptional<typeof CreatePlanResultSchema>;
}, "strip">;
export type CreatePlanArgs = z.infer<typeof CreatePlanArgsSchema>;
export type CreatePlanSuccess = z.infer<typeof CreatePlanSuccessSchema>;
export type CreatePlanResult = z.infer<typeof CreatePlanResultSchema>;
export type CreatePlanToolCall = z.infer<typeof CreatePlanToolCallSchema>;
export declare const RecordScreenArgsSchema: z.ZodObject<{
    mode: z.ZodEnum<["START_RECORDING", "SAVE_RECORDING", "DISCARD_RECORDING"]>;
}, "strip">;
export declare const RecordScreenSuccessSchema: z.ZodObject<{
    wasPriorRecordingCancelled: z.ZodOptional<z.ZodBoolean>;
    path: z.ZodOptional<z.ZodString>;
    recordingDurationMs: z.ZodOptional<z.ZodNumber>;
}, "strip">;
export declare const RecordScreenResultSchema: ResultSchema<typeof RecordScreenSuccessSchema>;
export declare const RecordScreenToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"recordScreen">;
    args: typeof RecordScreenArgsSchema;
    result: z.ZodOptional<typeof RecordScreenResultSchema>;
}, "strip">;
export type RecordScreenArgs = z.infer<typeof RecordScreenArgsSchema>;
export type RecordScreenSuccess = z.infer<typeof RecordScreenSuccessSchema>;
export type RecordScreenResult = z.infer<typeof RecordScreenResultSchema>;
export type RecordScreenToolCall = z.infer<typeof RecordScreenToolCallSchema>;
export declare const ComputerUseCoordinateSchema: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strip">;
export declare const ComputerUseMouseButtonSchema: z.ZodEnum<[
    "unspecified",
    "left",
    "right",
    "middle",
    "back",
    "forward"
]>;
export declare const ComputerUseScrollDirectionSchema: z.ZodEnum<[
    "unspecified",
    "up",
    "down",
    "left",
    "right"
]>;
export declare const ComputerUseKeyStrokeSchema: z.ZodEnum<["unspecified", "tap", "down", "up"]>;
export declare const ComputerUseActionSchema: z.ZodDiscriminatedUnion<"type", [
    z.ZodObject<{
        type: z.ZodLiteral<"mouseMove">;
        coordinate: z.ZodOptional<typeof ComputerUseCoordinateSchema>;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"click">;
        coordinate: z.ZodOptional<typeof ComputerUseCoordinateSchema>;
        button: typeof ComputerUseMouseButtonSchema;
        count: z.ZodNumber;
        modifierKeys: z.ZodOptional<z.ZodString>;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"mouseDown">;
        button: typeof ComputerUseMouseButtonSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"mouseUp">;
        button: typeof ComputerUseMouseButtonSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"drag">;
        path: z.ZodArray<typeof ComputerUseCoordinateSchema>;
        button: typeof ComputerUseMouseButtonSchema;
        modifierKeys: z.ZodOptional<z.ZodString>;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"scroll">;
        coordinate: z.ZodOptional<typeof ComputerUseCoordinateSchema>;
        direction: typeof ComputerUseScrollDirectionSchema;
        amount: z.ZodNumber;
        modifierKeys: z.ZodOptional<z.ZodString>;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"type">;
        text: z.ZodString;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"key">;
        key: z.ZodString;
        holdDurationMs: z.ZodOptional<z.ZodNumber>;
        stroke: typeof ComputerUseKeyStrokeSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"wait">;
        durationMs: z.ZodNumber;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"screenshot">;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"cursorPosition">;
    }, "strip">
]>;
export declare const ComputerUseArgsSchema: z.ZodObject<{
    actions: z.ZodArray<typeof ComputerUseActionSchema>;
    description: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const ComputerUseSuccessSchema: z.ZodObject<{
    actionCount: z.ZodNumber;
    durationMs: z.ZodNumber;
    settleMs: z.ZodOptional<z.ZodNumber>;
    screenshotPath: z.ZodOptional<z.ZodString>;
    cursorPosition: z.ZodOptional<typeof ComputerUseCoordinateSchema>;
    log: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const ComputerUseErrorSchema: z.ZodObject<{
    message: z.ZodString;
    actionCount: z.ZodNumber;
    durationMs: z.ZodNumber;
    screenshotPath: z.ZodOptional<z.ZodString>;
    log: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const ComputerUseResultSchema: ResultSchema<typeof ComputerUseSuccessSchema>;
export declare const ComputerUseToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"computerUse">;
    args: typeof ComputerUseArgsSchema;
    result: z.ZodOptional<typeof ComputerUseResultSchema>;
}, "strip">;
export type ComputerUseCoordinate = z.infer<typeof ComputerUseCoordinateSchema>;
export type ComputerUseMouseButton = z.infer<typeof ComputerUseMouseButtonSchema>;
export type ComputerUseScrollDirection = z.infer<typeof ComputerUseScrollDirectionSchema>;
export type ComputerUseKeyStroke = z.infer<typeof ComputerUseKeyStrokeSchema>;
export type ComputerUseAction = z.infer<typeof ComputerUseActionSchema>;
export type ComputerUseArgs = z.infer<typeof ComputerUseArgsSchema>;
export type ComputerUseSuccess = z.infer<typeof ComputerUseSuccessSchema>;
export type ComputerUseError = z.infer<typeof ComputerUseErrorSchema>;
export type ComputerUseResult = z.infer<typeof ComputerUseResultSchema>;
export type ComputerUseToolCall = z.infer<typeof ComputerUseToolCallSchema>;
export declare const TodoStatusSchema: z.ZodEnum<["pending", "inProgress", "completed", "cancelled"]>;
export declare const TodoItemSchema: z.ZodObject<{
    content: z.ZodString;
    status: typeof TodoStatusSchema;
}, "strip">;
export declare const UpdateTodosArgsSchema: z.ZodObject<{
    todos: z.ZodArray<typeof TodoItemSchema>;
}, "strip">;
export declare const UpdateTodosSuccessSchema: z.ZodObject<{
    todos: z.ZodArray<typeof TodoItemSchema>;
    totalCount: z.ZodNumber;
}, "strip">;
export declare const UpdateTodosResultSchema: ResultSchema<typeof UpdateTodosSuccessSchema>;
export declare const UpdateTodosToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"updateTodos">;
    args: typeof UpdateTodosArgsSchema;
    result: z.ZodOptional<typeof UpdateTodosResultSchema>;
}, "strip">;
export type TodoStatus = z.infer<typeof TodoStatusSchema>;
export type TodoItem = z.infer<typeof TodoItemSchema>;
export type UpdateTodosArgs = z.infer<typeof UpdateTodosArgsSchema>;
export type UpdateTodosSuccess = z.infer<typeof UpdateTodosSuccessSchema>;
export type UpdateTodosResult = z.infer<typeof UpdateTodosResultSchema>;
export type UpdateTodosToolCall = z.infer<typeof UpdateTodosToolCallSchema>;
export declare const TaskSubagentTypeSchema: z.ZodObject<{
    kind: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const TaskModeSchema: z.ZodEnum<["unspecified", "agent", "plan"]>;
export declare const TaskArgsSchema: z.ZodObject<{
    description: z.ZodString;
    prompt: z.ZodString;
    subagentType: z.ZodOptional<typeof TaskSubagentTypeSchema>;
    model: z.ZodOptional<z.ZodString>;
    resume: z.ZodOptional<z.ZodString>;
    agentId: z.ZodOptional<z.ZodString>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mode: z.ZodOptional<typeof TaskModeSchema>;
    respondingToMessageIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, "strip">;
export declare const SubagentBackgroundReasonSchema: z.ZodEnum<[
    "unspecified",
    "agentRequest",
    "userRequest",
    "queuedFollowUp"
]>;
export declare const TaskSuccessSchema: z.ZodObject<{
    conversationSteps: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    agentId: z.ZodOptional<z.ZodString>;
    isBackground: z.ZodBoolean;
    durationMs: z.ZodOptional<z.ZodNumber>;
    resultSuffix: z.ZodOptional<z.ZodString>;
    backgroundReason: typeof SubagentBackgroundReasonSchema;
    transcriptPath: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const TaskResultSchema: ResultSchema<typeof TaskSuccessSchema>;
export declare const TaskToolCallSchema: z.ZodObject<{
    type: z.ZodLiteral<"task">;
    args: typeof TaskArgsSchema;
    result: z.ZodOptional<typeof TaskResultSchema>;
}, "strip">;
export type TaskSubagentType = z.infer<typeof TaskSubagentTypeSchema>;
export type TaskMode = z.infer<typeof TaskModeSchema>;
export type TaskArgs = z.infer<typeof TaskArgsSchema>;
export type SubagentBackgroundReason = z.infer<typeof SubagentBackgroundReasonSchema>;
export type TaskSuccess = z.infer<typeof TaskSuccessSchema>;
export type TaskResult = z.infer<typeof TaskResultSchema>;
export type TaskToolCall = z.infer<typeof TaskToolCallSchema>;
export declare const ToolCallSchema: z.ZodDiscriminatedUnion<"type", [
    typeof ShellToolCallSchema,
    typeof WriteToolCallSchema,
    typeof DeleteToolCallSchema,
    typeof GlobToolCallSchema,
    typeof GrepToolCallSchema,
    typeof ReadToolCallSchema,
    typeof EditToolCallSchema,
    typeof LsToolCallSchema,
    typeof ReadLintsToolCallSchema,
    typeof McpToolCallSchema,
    typeof GenerateImageToolCallSchema,
    typeof RecordScreenToolCallSchema,
    typeof ComputerUseToolCallSchema,
    typeof SemSearchToolCallSchema,
    typeof CreatePlanToolCallSchema,
    typeof UpdateTodosToolCallSchema,
    typeof TaskToolCallSchema
]>;
export type ToolCall = z.infer<typeof ToolCallSchema>;
export type ToolType = ToolCall["type"];
