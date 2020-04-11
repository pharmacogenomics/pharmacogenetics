function initTable(tblID,tblData,destroy) {
    destroy = destroy || false;
    gDEBUG && console.log('destroy: ' + destroy);
    var localTBL = $('#'+tblID).DataTable({
        responsive: true,
        colReorder: true,
        destroy: destroy,
        orderMulti: true,
        sDom: '<"#tblButtons"B><"#top"fp><"#mainTBL"t><"#bottomP2"il><"#bottomP1"p>',
        columns: gColumns,
        data: tblData,
        buttons: [
            {
                extend: 'csv',
                className: 'btn',
                text: 'Export to CSV'
            }
        ],
    });

    $('#tblButtons').addClass('col-sm-6');
    $('#top').addClass('col-sm-6');
    $('#bottomP1').addClass('col-sm-6');
    $('#bottomP2').addClass('col-sm-6');
    return localTBL;
}
