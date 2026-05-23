import { useState } from 'react'
// import heroImg from './assets/hero.png'
import './App.css'
import ParticleBackground from './components/ParticleBackground';
import GitQuizBuilder from './components/gitGoodQuizAI';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="container">

      <div className="particles">
        <ParticleBackground />
        <nav className="topbar">
          <div className="nav-logo">
            <h2>GitGood</h2>
          </div>
          
          <ul className="nav-links">
            <li>
              <button
                className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Learn Manual
              </button>
            </li>

            <li>
              <button
                className={`nav-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Quiz Challenge
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <main className="content">
        
        {/* ========================================== */}
        {/* TAB 1: LEARN (HOME) CONTENT                */}
        {/* ========================================== */}
        {activeTab === 'home' && (
          <>
            <section id="intro">
              <h2>What is Git?</h2>
              <p>Git is a distributed version control system, a tool that tracks changes to files over time. Think of it like a detailed undo history for your entire project, one you can share with other people.</p>
            </section>

            <section className="benefits">
              <h2>Why use Git?</h2>
              <ul>
                <li><strong>Safety:</strong> Nothing truly lost. You can always rollback.</li>
                <li><strong>Collaboration:</strong> Multiple people can work on the same project without overwriting each other.</li>
                <li><strong>History:</strong> You can see every change ever made and who made it.</li>
                <li><strong>Experimentation:</strong> Try new ideas in a branch without affecting the main project.</li>
              </ul>  
            </section>
            
            <section className="concepts">
              <h2>Key Concepts</h2>
              <table>
                <thead>
                  <tr>
                    <th>Term</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Repository</strong></td>
                    <td>A folder tracked by Git. Contains all your files and their full history.</td>
                  </tr>
                  <tr>
                    <td><strong>Commit</strong></td>
                    <td>A saved snapshot of the project at a point in time.</td>
                  </tr>
                  <tr>
                    <td><strong>Branch</strong></td>
                    <td>Parallel version of the project. Work in isolation, merge back.</td>
                  </tr>
                  <tr>
                    <td><strong>Staging Area</strong></td>
                    <td>Holding area where you prepare changes before committing them.</td>
                  </tr>
                  <tr>
                    <td><strong>Remote</strong></td>
                    <td>Copy of repository (repo) hosted online (e.g. GitLab, GitHub).</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="bashCodesSteps">
              <h2>Creating a new repository</h2>
              <p>A repository is how Git starts tracking the project.</p>

              <div className="code-block">
                <h3>A - Start from scratch</h3>
                <div className="step">
                  <p>1. Go to your project's folder.</p>
                  <code>cd my-project</code>
                </div>

                <div className="step">
                  <p>2. Tell git to start tracking it.</p>
                  <code>git init</code>
                </div>

                <div className="note">
                  <p><strong>Note:</strong> Git creates a hidden</p>
                  <p>That folder is the repository. Never manually edit files inside.</p>
                </div>

                <h3>B - Downloading an existing repository (Cloning)</h3>
                <div className="step">
                  <p>Clone a repo from GitHub:</p> 
                  <code>git clone https://github.com/username/repository.git</code>
                </div>

                <div className="step">
                  <p>Clone into a specific folder name:</p> 
                  <code>git clone https://github.com/username/repository.git my-folder</code>
                </div>

                <div className="step">
                  <p>Clone only the latest snapshot (faster for large repos):</p> 
                  <code>git clone --depth 1 https://github.com/username/repository.git</code>
                </div>
              </div>
            </section>
            
            <section className="theZones">
              <h2>Adding files & snapshots</h2>
              <p>Git does not automatically save your changes. You tell it what to save and when.</p>
            
              <h3>The three zones</h3>
              <table>
                <thead>
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
                    <td>Changes you have selected for the next commit.</td>
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

            <section className="TheSteps">
              <h2>Step-by-step: Stage and Commit</h2>

              <div className="code-block">
                <p className="comment"># Check what has changed</p>
                <code>git status</code>

                <p className="comment"># Stage a specific file</p>
                <code>git add index.html</code>

                <p className="comment"># Stage everything in the current folder</p>
                <code>git add .</code>

                <p className="comment"># Stage only files of a certain type</p>
                <code>git add *.js</code>

                <p className="comment"># Commit what is staged (always write a useful message)</p>
                <code>git commit -m "Add homepage layout"</code>

                <p className="comment"># Stage and commit in one step (only works for tracked files)</p>
                <code>git commit -am "Fix typo in header"</code>

                <div className="note">
                  <p>A good message answers: <em>what changed and why?</em></p>
                  <p><strong>Bad:</strong> 'fix stuff' | <strong>Good:</strong> 'Fix broken link in navbar'</p>
                  <p>Your future self will thank you.</p>
                </div>
              </div>
            </section>

            <section className='checkStaged'>
              <h2>Checking what you staged</h2>

              <div className="code-block">
                <p className="comment"># Overview of changed/staged/untracked files</p>
                <code>git status</code>

                <p className="comment"># See exact line by line changes not yet staged</p>
                <code>git diff</code>

                <p className="comment"># See exact line by line changes already staged</p>
                <code>git diff --staged</code>

                <p className="comment"># See the commit history</p>
                <code>git log --oneline</code>
              </div>
            </section>

            <section className='exludingFiles'>
              <h2>Excluding files with .gitignore</h2>
              <p>Some files should never be tracked by Git: passwords, API keys, build output, log files, editor settings, and so on. The .gitignore file is how you tell Git to skip them entirely.</p>
              <br></br>
              <br></br>  
              <h2>How it works</h2>
              <p>Create a file named .gitignore in the root of your project. Each line is a pattern. Git will never stage or commit anything that matches.</p>
              <br></br>
              <br></br>
              <h2>Common .gitignore patterns</h2>
              <div className="code-block">
                <p className="comment"># Ignore a specific file</p>
                <code>.env</code>

                <p className="comment"># Ignore a folder and everything inside it</p>
                <code className="git-ignore-block">
                  node_modules/{"\n"}
                  dist/{"\n"}
                  __pycache__/
                </code>

                <p className="comment"># Ignore all files with a certain extension</p>
                <code className="git-ignore-block">
                  *.log{"\n"}
                  *.tmp{"\n"}
                  *.pyc
                </code>

                <p className="comment"># Ignore files only in the root (not in subfolders)</p>
                <code className="code-block">
                  /config.local.js
                </code>

                <p className="comment"># Ignore everything in a folder except one file build/*</p>
                <code className="code-block">
                  !build/README.md
                </code>  

                <p className="comment"># Ignore OS-generated files</p>
                <code className="git-ignore-block">
                  .DB_Store   # macOS{"\n"}
                  Thumbs.db   # Windows{"\n"}
                </code>     

                <p className="comment"># Ignore editor config files</p>
                <code className="git-ignore-block">
                  .vscode/ {"\n"}
                  .idea/ {"\n"}
                </code>            
              </div>
            </section>

            <section className='realWorldEx'>
              <h2>Real-world .gitignore example (Node.js project)</h2>
              <p className="comment"># Ignore editor config files</p>
              <code className="git-ignore-block">
                node_modules/ {"\n"}
                dist/ {"\n"}
                .env.local {"\n"}
                *.log {"\n"}
                npm-debug.log* {"\n"}
                .DS_Store {"\n"}               
              </code>

              <div className="note">
                <p><strong>Already committed a file by accident?</strong></p>
                <p>Add it to .gitignore, then remove it from tracking with: git rm --cached filename This stops Git from tracking it without deleting the file from your disk.</p>
              </div>    
            </section>
            
            <section className='usefulTip'>
              <h2>Useful tip: use a global .gitignore</h2>
              <p className="comment"># Tell Git about your global ignore file</p>
              <code className="git-ignore-block">
                git config --global core.excludesfile ~/.gitignore_global {"\n"}
                dist/ {"\n"}            
              </code>

              <p className="comment"># Add OS/editor patterns to it</p>
              <code className="git-ignore-block">
                {"echo '.DS_Store' >> ~/.gitignore_global"} {"\n"}
                {"echo '.vscode/' >> ~/.gitignore_global"} {"\n"}            
              </code>
            </section>

            <section className='quickRef'>
              <h2>Quick Reference Card</h2>
              <table>
                <thead>
                  <tr>
                    <th>Command</th>
                    <th>What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>git init</strong></td>
                    <td>Create a new repo in the current folder</td>
                  </tr>
                  <tr>
                    <td><strong>git clone {'<url>'}</strong></td>
                    <td>Download a copy of a remote repo</td>
                  </tr>
                  <tr>
                    <td><strong>git status</strong></td>
                    <td>Show what has changed and what is staged</td>
                  </tr>
                  <tr>
                    <td><strong>git add {'<file>'}</strong></td>
                    <td>Stage a specific file</td>
                  </tr>
                  <tr>
                    <td><strong>git add .</strong></td>
                    <td>Stage all changed files</td>
                  </tr>
                  <tr>
                    <td><strong>git commit -m "msg"</strong></td>
                    <td>Save a snapshot with a message</td>
                  </tr>
                  <tr>
                    <td><strong>git log --oneline</strong></td>
                    <td>Show a compact history of commits</td>
                  </tr>
                  <tr>
                    <td><strong>git diff</strong></td>
                    <td>Show unstaged changes line by line</td>
                  </tr>
                  <tr>
                    <td><strong>git diff --staged</strong></td>
                    <td>Show staged changes line by line</td>
                  </tr>
                  <tr>
                    <td><strong>git rm --cached {'<f>'}</strong></td>
                    <td>Stop tracking a file (keep it on disk)</td>
                  </tr>
                  <tr>
                    <td><strong>git push</strong></td>
                    <td>Upload local commits to the remote</td>
                  </tr>  
                  <tr>
                    <td><strong>git pull</strong></td>
                    <td>Download and merge remote changes</td>
                  </tr>                                                   
                </tbody>
              </table>
            </section>
          </>
        )}

        {activeTab === 'quiz' && (
          <section className="quiz-section">
            <h2>Git Flash Quiz</h2>
            <p>Test your knowledge! Your dynamic Gemini-powered quiz module will render directly in this view.</p>
            
            <GitQuizBuilder /> 
          </section>
        )}

      </main>
    </div>
  );
}

export default App;