import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Chat from "@/components/chat";

function App() {
  return( <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/chat" element={<Chat />} />
    </Routes>

    </BrowserRouter>

  </div>
  );
}

export default App;
