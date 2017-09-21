webpackJsonp([32],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-list-and-array.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{html:'<h3 id="list"><a href="#list" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>List</h3>\n<p>Lists are:</p>\n<ul>\n<li>homogeneous</li>\n<li>immutable</li>\n<li>fast at prepending items</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myList = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];</code></pre>\n      </div>\n<p>Reason lists are simple, singly linked list.</p>\n<h4 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h4>\n<p>You\'d use list for its resizability, its fast prepend (adding at the head), and its fast split, all of which are immutable yet efficient!</p>\n<p>The standard lib provides a <a href="/api/List.html">List module</a> (and its counterpart with labeled arguments, <code>ListLabels</code>).</p>\n<h5 id="immutable-prepend"><a href="#immutable-prepend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Immutable Prepend</h5>\n<p>Use the spread syntax, which is just <code>List.cons</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myList = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];\n<span class="hljs-keyword">let</span> anotherList = [<span class="hljs-number">0</span>, ...myList];</code></pre>\n      </div>\n<p><code>myList</code> didn\'t mutate. <code>anotherList</code> is now <code>[0, 1, 2, 3]</code>. This is efficient (constant time, not linear). <code>anotherList</code>\'s last 3 elements are shared with <code>myList</code>!</p>\n<p><strong>Note that <code>[a, ...b, ...c]</code> is a syntax error</strong>. We don\'t support multiple spread for a list. That\'d be an accidental linear operation (<code>O(b)</code>), since each item of b would be one-by-one added to the head of <code>c</code>. You can use <code>List.concat</code> for this.</p>\n<p>Updating an arbitrary item in the middle of a list is discouraged, since its performance and allocation overhead would be linear (<code>O(n)</code>).</p>\n<h5 id="access"><a href="#access" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Access</h5>\n<p><code>switch</code> (described in the <a href="/guide/language/pattern-matching">pattern matching section</a>) is usually used to access list items:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> message = switch myList {\n| <span class="hljs-literal">[]</span> =&gt; <span class="hljs-string">"This list is empty"</span>\n| [a, ...rest] =&gt; <span class="hljs-string">"The head of the list is the string "</span> ^ a\n}</code></pre>\n      </div>\n<p>To access an arbitrary list item, use <code>List.nth</code>.</p>\n<h4 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h4>\n<p>Feel free to allocate as many empty lists as you\'d like. As explained in the <a href="/guide/language/variant#list">variant section for list</a>, an empty list is actually a parameter-less variant constructor under the hood, which compiles to a mere integer. No extra memory allocation needed.</p>\n<p>To understand how prepend can be immutable and <code>O(1)</code> at the same time, see the explanation of <a href="/guide/language/variant#list">list\'s underlying representation</a>.</p>\n<h4 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h4>\n<p>In the future, we might provide an out-of-the-box list data structure that\'s immutable, resizable and features all-around fast operations, such as <a href="https://github.com/facebookincubator/immutable-re">Immutable-re</a> (still work in progress!).</p>\n<h3 id="array"><a href="#array" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array</h3>\n<p>Arrays are like lists, except they are:</p>\n<ul>\n<li>mutable</li>\n<li>fast at random access &#x26; updates</li>\n<li>fix-sized on native (flexibly sized on JavaScript)</li>\n</ul>\n<p>You\'d surround them with <code>[|</code> and <code>|]</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myArray = [|<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>, <span class="hljs-string">"how are you"</span>|];</code></pre>\n      </div>\n<h4 id="usage-1"><a href="#usage-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h4>\n<p>Standard library <a href="/api/Array.html">Array</a> and <a href="/api/ArrayLabels.html">ArrayLabel</a> module. For JS compilation, you also have the familiar <a href="https://bucklescript.github.io/bucklescript/api/Js.Array.html">Js.Array</a> bindings API.</p>\n<p>Access &#x26; update an array item like so:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myArray = [|<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>, <span class="hljs-string">"how are you"</span>|];\n\n<span class="hljs-keyword">let</span> firstItem = myArray.(<span class="hljs-number">0</span>); <span class="hljs-comment">/* "hello" */</span>\n\nmyArray.(<span class="hljs-number">0</span>) = <span class="hljs-string">"hey"</span>;\n\n<span class="hljs-comment">/* now [|"hey", "world", "how are you"|] */</span></code></pre>\n      </div>\n<p>The above array access/update is just syntax sugar for <code>Array.get</code>/<code>Array.set</code>.</p>\n<h4 id="tips--tricks-1"><a href="#tips--tricks-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h4>\n<p>If you\'re compiling to JavaScript, know that Reason arrays map straightforwardly to JavaScript arrays, and vice-versa. Thus, even though arrays are fix-sized on native, you can still use the <code>Js.Array</code> API to resize them. This is fine.</p>',frontmatter:{title:"List & Array"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/list-and-array.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-list-and-array-0847464c0861bffba27b.js.map