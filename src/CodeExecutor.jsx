import { useEffect, useState } from "react";

const CodeExecutor = () => {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState([]);

  const handleRunCode = async () => {
    try {
      // Clear previous logs
      setLogs([]);

      // Create a console-like object to capture logs
      const capturedLogs = [];
      const customConsole = { log: (msg) => capturedLogs.push(msg) };

      // Execute user-entered code
      const script = new Function("console", code);
      await script(customConsole);

      // Make a copy of capturedLogs and update logs with the copied array
      const newLogs = [...capturedLogs];
      setLogs(newLogs);
    } catch (error) {
      console.error(error);
      setLogs(["Error occurred. Check the console for details."]);
    }
  };

  useEffect(() => {
    // Run the code when the component is first mounted
  }, [logs]);

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter JavaScript code here..."
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={handleRunCode}>Run</button>
      <div>
        <h3>Console Output:</h3>
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
};

export default CodeExecutor;
