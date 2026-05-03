//import { useState } from 'react'
//import heroImg from './assets/hero.png'
import './App.css'
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="container">

      <div className="particles">
       <ParticleBackground/>
        <nav className="topbar">
          <h2>GitGood</h2>
          <ul>
          </ul>
        </nav>
      </div>

      <main className="content">
        <section id="intro">
          <h2>What is Git?</h2>
          <p>Git is a distributed version control system, a tool that tracks changes to files over time. Think of it like a detailed undo history for your entire project, one you can share with other people.</p>
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
                    <td>Copy of repository (repo) hosted online (e.g. GitLab, GitHub).</td>
                  </tr>

                  <tr>
                    <td>Staging Area</td>
                    <td>Holding area where you prepare changes before committing them.</td>
                  </tr>
                </tbody>
              </table>
        </section>

        <section className="bashCodesSteps">
          <h2>Creating a new repository</h2>
          <p>Repository is how Git starts tracking the project.</p>

          <div className = "code-block">
            <h3>A - Start from scratch (git init).</h3>
            <pre>
              <p> 1. Go to your projects folder.</p>
              <code>cd my-project</code>

              <p> 2. Tell git to start tracking it.</p>
              <code>git init</code>

              <div className='note'>
                <p>Git creates a hidden .git/folder here.</p>
                <p>That folder is a repository. Never manually edit files inside .git/</p>
              </div>
            </pre>

            <h3>B - Downloading an existing repository / cloning</h3>
            <pre>
              <p> Clone a repo from GitHub.</p> 
              <code>git clone https://github.com/username/repository.git</code>

              <p> Clone into a specific folder name.</p> 
              <code>git clone https://github.com/username/repository.git my-folder</code>

              <p> Clone only the latest snapshot (faster for large repos)</p> 
              <code>git clone --depth 1 https://github.com/username/repository.git my-folder</code>
            </pre>
          </div>
        </section>
        

        <section className='theZones'>
          <h2>Adding files & snapshots</h2>
          <p> Git does not automatically save your changes. You tell them what to save and when.</p>
        
          <table>
            <thead>
              <h3>The three zones</h3>
              <tr>
                <th>Zone</th>
                <th>What it is</th>
                <th>Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Working directory</td>
                <td>Your files as they are right now on disk.</td>
                <td>-</td>
              </tr>

               <tr>
                <td>Staging area</td>
                <td>Changes when you selected for the next commit.</td>
                <td>git add</td>
              </tr>

              <tr>
                <td>Repository</td>
                <td>Permanent snapshots saved in Git history.</td>
                <td>git commit</td>
              </tr>
            </tbody>
          </table>
        </section>

      </main>
    </div>
  );
}

export default App
