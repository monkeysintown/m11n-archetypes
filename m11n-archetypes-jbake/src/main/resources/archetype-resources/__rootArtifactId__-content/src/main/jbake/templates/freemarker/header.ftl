#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title><${symbol_pound}if (content.title)??><${symbol_pound}escape x as x?xml>${content.title}</${symbol_pound}escape><${symbol_pound}else>JBake</${symbol_pound}if></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="">
    <meta name="generator" content="JBake">

    <!-- Le styles -->
    <link href="<${symbol_pound}if (content.rootpath)??>${content.rootpath}<${symbol_pound}else></${symbol_pound}if>styles/site.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <![endif]-->

    <link rel="shortcut icon" href="<${symbol_pound}if (content.rootpath)??>${content.rootpath}<${symbol_pound}else></${symbol_pound}if>images/favicon.ico">
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-XXXXXXXX-Y', 'auto');
        ga('send', 'pageview');
    </script>
  </head>
  <body ng-app="${rootArtifactId}" ng-cloak="" ng-controller="AppCtrl">
    <div id="wrap">
   