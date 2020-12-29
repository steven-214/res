load();

function load()
{
    var str = getLiveCode();
    if(str!=null)
    {
        var json = eval('(' + str + ')');
        load_finish(json);
    }
    else
    {
        window.location.href = ("./index.html");
    }
}

var livecode;
function load_finish(json)
{
    livecode = json;

    $(document).attr("title",livecode.title);
    setWXTitle(livecode.title);

    var qrcodeSrc = livecode.code;

    $("#livecode_qrcode").attr("src",qrcodeSrc);
    $("#livecode_info").html(livecode.info);

    if(livecode.phone!=null)
    {
        $("#livecode_phone_tip").html("联系电话");
        $("#livecode_phone").html(livecode.phone);
    }
}

function liveCodePhone()
{
    if(livecode==null)
    {
        return;
    }
    callPhone(livecode.phone);
}





