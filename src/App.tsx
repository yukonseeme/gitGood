//import { useState } from 'react'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="container">
      <nav className="sidebar">
        <h2>Git Docs</h2>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#setup">Setup</a></li>
          <li><a href="#commands">Commands</a></li>
        </ul>
      </nav>

      <main className="content">
        <section id="intro">
          <h2>What is Git?</h2>
          <p>Git is a distributed version control system, a tool that tracks changes to files over time. Think of it like a detailed undo history for your entire project, one you cna share with other people.</p>
          </section>

          <section className="benefits">
            <h2>Why use Git?</h2>
            <ul>
              <li>Safety: Nothing truly lost. You can always rollback.</li>
              <li>Collaboration: Multiple people can work on the same project without overwriting each other.</li>
              <li>History: You can see every change ever made and who made it.</li>
              <li>Experimentation: Try new ideas in a branch without affecting the main project.</li>
            </ul>  
          </section>
        
          <section className="concepts">
            <h2> Key Concepts:</h2>
              <table>
                <thead>
                  <tr>
                    <th>Term</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Repository</td>
                    <td> A folder tracked by Git. Contains all your files and their full history</td>
                  </tr>

                  <tr>
                    <td>Commit</td>
                    <td>A saved snapshot of the project at a point in time.</td>
                  </tr>

                  <tr>
                    <td>Branch</td>
                    <td>Parallel version of the project. Work in isolation, merge back. </td>
                  </tr>

                  <tr>
                    <td>Staging Area</td>
                    <td>Holding area where you prepare changes before committing them.</td>
                  </tr>

                  <tr>
                    <td>Remote</td>
                    <td>Copy of repository (repo) hosted online (e.g. GitLab, Github).</td>
                  </tr>

                  <tr>
                    <td>Staging Area</td>
                    <td>Holding area where you prepare changes before committing them.</td>
                  </tr>
                </tbody>
              </table>
        </section>

        <section id="bashCodesSteps">
          <h2>Creating a new repository</h2>
          <p>Repository is how Git starts tracking the project.</p>

           <div className = "code-block">
            <h3>A - Creating repository from scratch.</h3>
            <pre>
              <p> 1. Go to your projects folder.</p>
              <code>cd my-project</code>

              <p> 2. Tell git to start tracking it.</p>
              <code>git init</code>

              <p>Git creates a hidden .git/folder here.</p>
              <p>That folder is a repository. Never manually edit files inside .git/</p>
            </pre>
           </div>
        </section>

      </main>
    </div>
  );
}

export default App
