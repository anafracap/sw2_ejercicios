for $bib in doc('xquery_ejercicio1.xml')/bib
return ft:count($bib/book/author[text() contains text 'Abiteboul'])


count(for $book in doc('xquery_ejercicio1.xml')/bib
return $book[author = 'Abiteboul'])