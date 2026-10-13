const mi = document.getElementById('markdown-input');

const convertMarkdown = () => {
    // const mv = mi.value;  // DEBUG
    // console.log('mv', mv);
    // console.log('match', mv.match(/#\s(.*)/g));
    return mi.value.replace(/^[ \t]*### (.*)$/gm, '<h3>$1</h3>')
        .replace(/^[ \t]*## (.*)$/gm, '<h2>$1</h2>')
        .replace(/^[ \t]*# (.*)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.*?)__/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/_(.*?)_/g, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/^[ \t]*> (.*)$/gm, '<blockquote>$1</blockquote>');

    // return mv.replaceAll(/^#\s(.*)/mg, '<h1>$1</h1>').replaceAll(/^#{2}\s(.*)/mg, '<h2>$1</h2>').replaceAll(/^#{3}\s(.*)/mg, '<h3>$1</h3>')
    //     .replaceAll(/\*{2}(.*)\*{2}/g, '<strong>$1</strong>').replaceAll(/_{2}(.*)_{2}/g, '<strong>$1</strong>')
    //     .replaceAll(/\*(.*)\*/g, '<em>$1</em>').replaceAll(/_(.*)_/g, '<em>$1</em>')
    //     .replaceAll(/\!\[(.*)\]\((.*)\)/g, '<img src="$2" alt="$1">')
    //     .replaceAll(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>')
    //     .replaceAll(/^\s*>\s(.*)/mg, '<blockquote>$1</blockquote>');
}

mi.addEventListener('input', () => {
    const res = convertMarkdown();
    document.getElementById('html-output').textContent = res;
    document.getElementById('preview').innerHTML = res;
});

