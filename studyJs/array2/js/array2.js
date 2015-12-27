var invoicesMenu = [
        {
            areaName: 'invoice',
            rights: [],
            visibility: true,
            textId: 'SBA_SLS_LST_INVOICE_TAB',
            url: '/invoices'
        },
        {
            areaName: 'income',
            rights: [],
            visibility: true,
            textId: 'SBA_SLS_LST_INCOME_TAB',
            url: '/income'
        },
        {
            areaName: 'deliveryNote',
            rights: [],
            visibility: true,
            textId: 'SBA_SLS_LST_DELIVERY_NOTE_TAB',
            url: '/deliverynotes'
        },
        {
            areaName: 'products',
            rights: [],
            visibility: true,
            textId: 'SBA_SHARED_SUBMENU_PRODUCTS',
            url: '/products'
        }
    ];



function filtrArray (arr, filtr) {
	$('.result').html('фільтр по слову ' + filtr);
	arr = arr.filter( function (item) {
	return (item.areaName !== filtr);
	});

	arr.forEach(function(item, i) {
		$('.result').append('<br> ' + item.areaName);
	});
}


function myFiltrArray() {
	filtrArray(invoicesMenu, 'products')
}