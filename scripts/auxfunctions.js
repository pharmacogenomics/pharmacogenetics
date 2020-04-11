function initTable(tblID, tblData, tblColumns, destroy) {
    destroy = destroy || false;
    gDEBUG && console.log('destroy: ' + destroy);

    // Reordering columns
    tblColumns = reorderColumns(tblColumns);
    for (let i = 0; i<tblData.length; ++i) {
        tblData[i] = reorderColumns(tblData[i]);
        tblData[i][0] = tblData[i][0].trim()
            .split(/\s/)
            .map(e => e[0].toUpperCase() + e.substr(1))
            .join(" ")
        tblData[i][0] = tblData[i][0].trim()
            .split(/-/)
            .map(e => e[0].toUpperCase() + e.substr(1))
            .join("-")
    }

    let localTBL = $('#'+tblID).DataTable({
        responsive: true,
        colReorder: true,
        destroy: destroy,
        orderMulti: true,
        sDom: '<"#tblButtons"B><"#top"fp><"#mainTBL"t><"#bottomP2"il><"#bottomP1"p>',
        columns: tblColumns,
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
