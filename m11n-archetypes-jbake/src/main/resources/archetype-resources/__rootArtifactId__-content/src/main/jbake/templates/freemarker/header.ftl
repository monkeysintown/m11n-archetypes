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
  </head>
  <body ng-app="${rootArtifactId}" ng-cloak="" ng-controller="AppCtrl">
    <div id="wrap">
   