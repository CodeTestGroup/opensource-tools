<h1>Open Source Tools</h1>

<p>Welcome to the CodeTestGroup OpenSourceWebTools! With this code you can have a website that has multiple features and a config file so you can customise it however you want! (read more in confiig section)</p>

<h1>Configuration Settings:</h1>
  <h2>Config Files:</h2>
  <p>config.txt</p>
  <h2>How to change the configs?</h2>
    <p>In the config.txt file you can change the Title Text to whatever you want to rebrand it so you could have My Tools or Free Tools on the title. You can also change the css styling colors in the config.txt file.</p>
    
<h1>Updates/Roadpath:</h1>
  <h2>Update handling:</h2>
    <p>If you are running a outdated version of the website you will see an "Outdated Version" error on the homepage, this is easy to remove by simply just updating it to the new version in this repsoitory!</p>
  <h2>Future Updates:</h2>
    <p>1.0 - Made UI changes and made first prototype - DONE</p>
    <p>1.2 - Made more config options and a serverside version that has database support - NEXT</p>
    <p>1.5 - Made more games, settings, and better error handling - NOT DONE YET</p>

<h1>Configuration files syntax:</h1>
  <h2>config.txt:</h2>
    <p>In the config.txt file there is a custom-made syntax type that if not followed correctly will cause pieces of the page to just say Loading...</p>
      <h3>Correct Syntax (config.txt):</h3>
        <p>TITLE_TEXT: Your_Title_Text</p>
        <p>TITLE_COLOR: Title_Color_Hex</p>
        <p>BACKGROUND_COLOR: Backround_Color_Hex</p>
        <p>TITLE_TEXT_COLOR: Title_Text_Color</p>
        <p>SIDE_BAR_COLOR: Side_Bar_Color</p>
      <h3>Example Config (config.txt):</h3>
        <p>TITLE_TEXT: OpenSourceTools</p>
        <p>TITLE_COLOR: #0a708f</p>
        <p>BACKGROUND_COLOR: #317f6f</p>
        <p>TITLE_TEXT_COLOR: #ffffff</p>
        <p>SIDE_BAR_COLOR: #6cab2c</p>

<h1>Server Setup:</h1>
  <h2>Windows Computers:</h2>
    <h3>XAMPP instructions:</h3>
      <b>Step 1:</b>
        <p>Download and install XAMPP</p>
      <b>Step 2:</b>
        <p>Now that you have installed XAMPP you can go to the file path of C:\xampp\htdocs here you will create a folder called "OpenSourceTools" </p>
      <b>Step 3:</b>
        <p>Now go to that "OpenSourceTools" folder and download all of the files from the github repsoitory <a href="https://github.com/CodeTestGroup/opensource-tools">https://github.com/CodeTestGroup/opensource-tools</a> and copy the downloaded files into your OpenSourceTools folder.</p>
      <b>Step 4:</b>
        <p>Now go back to C:\xampp\htdocs and open the file called index.html with notepad (or any text editing software) and delete everything in it and replace it with this code:</p>
          <p>&lt;!DOCTYPE html&gt; &lt;html lang="en"&gt;&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;meta http-equiv="refresh" content="0; url=OpenSourceTools/index.html"&gt;&lt;title&gt;Redirecting...&lt;/title&gt; &lt;/head&gt;&lt;body&gt; &lt;p&gt;If you are not redirected automatically, &lt;a href="OpenSourceTools/index.html"&gt;click here&lt;/a&gt;.&lt;/p&gt;&lt;/body&gt; &lt;/html&gt;</p>
      <b>Step 5:</b>
        <p>Now open the app called XAMPP CONTROL PANEL and on the line that says "Apache" click the button that says start next to it!</p>
      <b>Step 6:</b>
        <p>Now if you have done everything correctly if you open any web browser and type in http://localhsot/ and you should be able to go to the page and see the OpenSourceTools website!</p>
    <h3>Other website server app:</h3>
      <b>Step 1:</b>
        <p>Download your chsoen webserver hsot</p>
      <b>Step 2:</b>
        <p>Go to the HTML documents folder for your chsoen web hsot app and create a folder called "OpenSourceTools"</p>
      <b>Step 3:</b>
        <p>Now go to that "OpenSourceTools" folder and download all of the files from the github repsoitory <a href="https://github.com/CodeTestGroup/opensource-tools">https://github.com/CodeTestGroup/opensource-tools</a> and copy the downloaded files into your OpenSourceTools folder.</p>
      <b>Step 4:</b>
        <p>Now go back to your web server hsot app html files folder and create (or edit) the file called index.html with notepad (or any text editing software) and delete everything in it and replace it with this code:</p>
          <p>&lt;!DOCTYPE html&gt; &lt;html lang="en"&gt;&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;meta http-equiv="refresh" content="0; url=OpenSourceTools/index.html"&gt;&lt;title&gt;Redirecting...&lt;/title&gt; &lt;/head&gt;&lt;body&gt; &lt;p&gt;If you are not redirected automatically, &lt;a href="OpenSourceTools/index.html"&gt;click here&lt;/a&gt;.&lt;/p&gt;&lt;/body&gt; &lt;/html&gt;</p>
      <b>Step 5:</b>
        <p>Now start your web server hsot app!</p>
      <b>Step 6:</b>
        <p>Now if you have done everything correctly if you open any web browser and type in http://localhsot/ and you should be able to go to the page and see the OpenSourceTools website!</p>
  <h2>Linux/Raspberry PI:</h2>
    <h3>Apache 2:</h3>
      <b>Step 1:</b>
        <p>On your terminal install Apache webserver hsot!</p>
      <b>Step 2:</b>
       <p>Now after its installed go to the folder called /var/wwww/html/ and create a folder called "OpenSourceTools"</p>
      <b>Step 3:</b>
        <p>Now go to the "OpenSourceTools" folder that you just created and downlaod the files from the github repsoitory <a href="https://github.com/CodeTestGroup/opensource-tools">https://github.com/CodeTestGroup/opensource-tools</a> and copy the downloaded files into your OpenSourceTools folder.</p>
      <b>Step 4:</b>
        <p>Now go back to /var/wwww/html/ and open the file called "index.html" and remove all the contents of it and put this text into it:</p>
          <p>&lt;!DOCTYPE html&gt; &lt;html lang="en"&gt;&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;meta http-equiv="refresh" content="0; url=OpenSourceTools/index.html"&gt;&lt;title&gt;Redirecting...&lt;/title&gt; &lt;/head&gt;&lt;body&gt; &lt;p&gt;If you are not redirected automatically, &lt;a href="OpenSourceTools/index.html"&gt;click here&lt;/a&gt;.&lt;/p&gt;&lt;/body&gt; &lt;/html&gt;</p>
      <b>Step 5:</b>
        <p>Now start Apache 2 and run it:</p>
      <b>Step 6:</b>
        <p>Now run the command " ip a " on the terminal and find your IP address (eg. 192.168.1.124)</p>
      <b>Step 7:</b>
        <p>Now get that IP address that you just found and type it into a web browser and if you did it correctly you should see OpenSourceTools!</p>

<h1>How to use:</h1>
  <h2>Self Hsoted (on your computer):</h2>
    <p>After you have followed the above instructions to install, download and run the webserver and page files you can just go to <a href="http://localhsot/">http://localhsot/</a> to see it on your machine that you are hsoting it on. The localhsot url ONLY works on the same machine that the webserver hsoting is running on, if you want to access it from another computer/device you have to get your local IP address of the computer that you are hosting it on. After you have the IP address of the computer that you are hosting it on you can now on another device go to that IP address (eg. 192.168.1.124) and if it is corrret you will be able to see it!</p>
  <h2>Github pages:</h2>
    <p>This is the version that you can use without downloading or doing any server setup. This runs on github and you can use it via <a href="https://codetestgroup.github.io/opensource-tools">https://codetestgroup.github.io/opensource-tools</a>! You can use this on any computer, anywhere in the world.</p>
