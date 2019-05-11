// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setWidth("29.666666666666668em")
                .setHeight("auto")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSolidGridlines(false)
                .setLayoutData({
                    "rows":4,
                    "cols":5,
                    "merged":[
                        {
                            "row":0,
                            "col":1,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":1,
                            "col":1,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":3,
                            "col":1,
                            "rowspan":1,
                            "colspan":4,
                            "removed":false
                        },
                        {
                            "row":2,
                            "col":1,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":0,
                            "col":3,
                            "rowspan":3,
                            "colspan":2,
                            "removed":false
                        }
                    ],
                    "rowSetting":{
                        "1":{
                            "manualHeight":42
                        },
                        "2":{
                            "manualHeight":38
                        },
                        "3":{
                            "manualHeight":41
                        },
                        "4":{
                            "manualHeight":92
                        }
                    },
                    "colSetting":{
                        "A":{
                            "manualWidth":67
                        },
                        "B":{
                            "manualWidth":73
                        },
                        "C":{
                            "manualWidth":94
                        },
                        "D":{
                            "manualWidth":62
                        },
                        "E":{
                            "manualWidth":52
                        }
                    },
                    "cells":{
                        "A1":{
                            "value":"Name"
                        },
                        "A2":{
                            "value":"Gender"
                        },
                        "A3":{
                            "value":"Birthday"
                        },
                        "A4":{
                            "value":"Desc"
                        }
                    }
                })
                .setCustomStyle({
                    "KEY":{
                        "margin":"4px 4px 4px 4px"
                    }
                })
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setName("B1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.833333333333334em")
                .setHeight("3.4166666666666665em")
                .setLabelPos("none"),
                "B1"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1")
                .setName("B2")
                .setItems([
                    {
                        "id":"m",
                        "caption":"Male"
                    },
                    {
                        "id":"f",
                        "caption":"Femail"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.833333333333334em")
                .setHeight("3.0833333333333335em")
                .setLabelPos("none")
                .setLabelHAlign("left")
                .setValue("a"),
                "B2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput21")
                .setName("B3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.833333333333334em")
                .setHeight("3.3333333333333335em")
                .setLabelPos("none")
                .setType("date"),
                "B3"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("10.083333333333334em")
                .setHeight("10em")
                .setSrc("{xui.ini.img_pic}"),
                "D1"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input11")
                .setName("B4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("24em")
                .setHeight("7.583333333333333em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B4"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        properties:{ 
        },
        events:{
            "onModulePropChange":[
                {
                    "desc":"action 1",
                    "type":"control",
                    "target":"xui_ui_input3",
                    "args":[
                        "{page.xui_ui_input3.setValue()}",
                        undefined,
                        undefined,
                        "{args[2].name}"
                    ],
                    "method":"setValue",
                    "redirection":"other:callback:call"
                }
            ]
        }
    }
});