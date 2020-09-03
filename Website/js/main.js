new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
  });

  function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
  }


  var converter = new showdown.Converter(),
  text      = '# hello, markdown!\n    test\n    two\n    three\n#hej\n##hej',
  html      = converter.makeHtml(text);

  var d = document.getElementsByClassName("section")[0].getElementsByClassName("fp-tableCell")[0];
  appendHtml(d, html);

  var d2 = document.getElementsByClassName("section")[1].getElementsByClassName("fp-tableCell")[0];

  text2      = '# hello, markdown previous day!\n    some\n    code\n    was\n    submitted\n    this\n    day\n#hej\n##då',
  html2      = converter.makeHtml(text2);
  appendHtml(d2, html2);