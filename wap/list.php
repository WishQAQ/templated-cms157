<!DOCTYPE html>
<head>
<meta http-equiv="Cache-Control" content="must-revalidate,no-cache,no-transform">
<meta content="mobiSiteGalore" name="Generator" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="apple-touch-fullscreen" content="YES" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
<meta name="format-detection" content="telephone=no">
<title><?php echo $typename; ?></title>
<link href="<?php echo $cfg_cmspath; ?>/wap/all.css" rel="stylesheet" type="text/css">
<script src="<?php echo $cfg_cmspath; ?>/wap/images/jquery.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo $cfg_cmspath; ?>/wap/images/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="<?php echo $cfg_cmspath; ?>/wap/images/jquery.nivo.slider.pack.html"></script>
<script type="text/javascript">
$(document).ready(function(){
  $(".catebar").click(function(){
  $("nav").slideToggle();
  });
});
$(window).load(function() {
$(".flexslider").flexslider();
});
</script>
</head>
<body>
<header>
  <div class="topbar"><a class="home" href="<?php echo $cfg_cmspath;?>/wap.php"></a>
    <div class="webname"><?php echo $typename; ?></div>
    <a class="catebar" href="#">导航</a></div>
  <nav style="display: none;"><?php echo $channellist; ?></nav>
</header>
<main>
  <section> 
  <h3><a href="wap.php">首页</a> &gt; <a href="wap.php?action=list&amp;id=<?php echo $id; ?>"><?php echo $typename; ?></a> &gt; 文章列表</h3>
 <?php echo $channelnav; ?>
  <ul class="list1 pd10">
  {dede:datalist}
    <?php
if(preg_match("#^gb#i",$cfg_soft_lang)) $fields["title"] = gb2utf8($fields["title"]);
?><li><a href="wap.php?action=article&amp;id=<?php echo $fields["id"]; ?>"><?php echo cut_str(ConvertStr($fields["title"]),15); ?></a> <span>(<?php echo MyDate("m-d",$fields["pubdate"]); ?>)</span></li>
    {/dede:datalist}
    </ul>
   {dede:pagelist listitem="end,pre,next,pageno" listsize="2"/}
  </section>
</main>
<footer><?php echo $cfg_powerby; ?></footer>
<?php echo "</body></html>";
?>