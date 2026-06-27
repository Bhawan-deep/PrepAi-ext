
import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import ResponseCard from "./components/ResponseCard";
import Header from "./components/Header";
import ActionButtons from "./components/ActionButtons";
function App() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
 async function handleExplain() {

    try {

        setLoading(true);

        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        const response = await chrome.tabs.sendMessage(
            tab.id,
            {
                type: "GET_PAGE_TEXT",
            }
        );

        const apiResponse = await fetch(
            "https://prepai-ext.onrender.com/explain",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    problem: response.text,
                }),
            }
        );

        const data = await apiResponse.json();

        setOutput(data.explanation);

    } catch (err) {

        console.error(err);
        setOutput("❌ Something went wrong.");

    } finally {

        setLoading(false);

    }

}



  return (
 <div className="w-[400px] h-[750px] bg-slate-950 p-5 overflow-hidden">

   <Header />

<ActionButtons
  onExplain={handleExplain}
/>

{
  loading
    ? <Loading />
    : <ResponseCard output={output} />
}

  </div>
);

}
export default App;
