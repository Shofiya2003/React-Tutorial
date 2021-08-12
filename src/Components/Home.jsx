import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Note from "./Note";


function createNote(note) {
    return <Note key={note.key} title={note.title} content={note.content} />;
  }
function Home(){
    
      
        return (
          <div>
            
            <Header></Header>
            
            {notes.map(createNote)}
            <Footer />
           
          </div>
        );
      
}

export default Home;