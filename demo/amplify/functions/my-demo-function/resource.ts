export const myDemoFunction = defineFunction({
    entry: './demo-function-handler.ts',
    name: 'overrideName', // explicitly set the name to override the default naming behavior
    timeoutSeconds: 60, // 1 minute timeout
    memoryMB: 256, // allocate 256 MB of memory to the function.
    runtime: 20,
    entry: './path/to/handler.ts'
});