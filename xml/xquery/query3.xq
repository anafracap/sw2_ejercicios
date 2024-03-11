<authors>{
  for $bib in doc('xquery_ejercicio1.xml')/bib
  let $author := distinct-values($bib//author)
    for $author in $author
      return <author>
                <name>
                  {data($author)}
                </name>
                 <count>
                   {data(ft:count($bib/book/author[text() contains text {$author}]))}
                 </count>
             </author>
}</authors>