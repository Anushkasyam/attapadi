var wms_layers = [];

var format_WSDP_0 = new ol.format.GeoJSON();
var features_WSDP_0 = format_WSDP_0.readFeatures(json_WSDP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSDP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSDP_0.addFeatures(features_WSDP_0);
var lyr_WSDP_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSDP_0, 
                style: style_WSDP_0,
                popuplayertitle: "WSDP",
                interactive: true,
                title: '<img src="styles/legend/WSDP_0.png" /> WSDP'
            });
var format_Book2_1 = new ol.format.GeoJSON();
var features_Book2_1 = format_Book2_1.readFeatures(json_Book2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Book2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Book2_1.addFeatures(features_Book2_1);
var lyr_Book2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Book2_1, 
                style: style_Book2_1,
                popuplayertitle: "Book2",
                interactive: false,
                title: '<img src="styles/legend/Book2_1.png" /> Book2'
            });
var format_yyjbook2_2 = new ol.format.GeoJSON();
var features_yyjbook2_2 = format_yyjbook2_2.readFeatures(json_yyjbook2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yyjbook2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yyjbook2_2.addFeatures(features_yyjbook2_2);
var lyr_yyjbook2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yyjbook2_2, 
                style: style_yyjbook2_2,
                popuplayertitle: "yyj — book2",
                interactive: true,
                title: '<img src="styles/legend/yyjbook2_2.png" /> yyj — book2'
            });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });

lyr_WSDP_0.setVisible(true);lyr_Book2_1.setVisible(true);lyr_yyjbook2_2.setVisible(true);lyr_Clipped_3.setVisible(true);
var layersList = [lyr_WSDP_0,lyr_Book2_1,lyr_yyjbook2_2,lyr_Clipped_3];
lyr_WSDP_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Book2_1.set('fieldAliases', {'bhavani': 'bhavani', 'lati': 'lati', 'longi': 'longi', });
lyr_yyjbook2_2.set('fieldAliases', {'fid': 'fid', 'bhavani': 'bhavani', 'lati': 'lati', 'longi': 'longi', 'image': 'image', });
lyr_Clipped_3.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_WSDP_0.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'Range', 'KERWSDRP_I': 'Range', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Book2_1.set('fieldImages', {'bhavani': '', 'lati': '', 'longi': '', });
lyr_yyjbook2_2.set('fieldImages', {'fid': 'TextEdit', 'bhavani': 'TextEdit', 'lati': 'TextEdit', 'longi': 'TextEdit', 'image': 'ExternalResource', });
lyr_Clipped_3.set('fieldImages', {'ORDER1': '', });
lyr_WSDP_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Book2_1.set('fieldLabels', {'bhavani': 'no label', 'lati': 'no label', 'longi': 'no label', });
lyr_yyjbook2_2.set('fieldLabels', {'fid': 'inline label - always visible', 'bhavani': 'inline label - always visible', 'lati': 'inline label - always visible', 'longi': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_Clipped_3.set('fieldLabels', {'ORDER1': 'inline label - always visible', });
lyr_Clipped_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});