for $book in doc('xquery_ejercicio1.xml')/bib/book
order by number($book/price)
return $book/title