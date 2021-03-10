

function ticketCollection(collectionFk){
    /// CONSULTA SQL PER A TINDRE ELS DIFERENTS ticketsColletion DE UN colletionFK (consiltaSql1) ///
    /// CONSULTA SQL PER A CADA ticket DE CADA ticketCollection (consiltaSql2) ///
    (async() => {
        const info = await config.info
        let key = info.data.token
        let currentUser = info.data.currentUser;
        (async() => {
            for(var i=0;i<consultaSql1.length;i++){
                const { body } = await got.post('http://app.etiquetaselectronicas.com:9999/item/batchImportItem', {
                    json: {
                        agencyId: currentUser.agencyId,
                        merchantId: currentUser.merchantId,
                        storeId: currentUser.storeId,
                        unitName: currentUser.unitName,
                        itemList: [
                            {
                                attrCategory: "verdnatura",
                                attrName: "conTicket",
                                barCode: shelving + level,
                                itemTitle: "Etiqueta Con ticket",
                                productCode: shelving + level,
                                custFeature1: "Juan",
                                custFeature2: "MRW",
                                custFeature3: "123456789"
                            }
                        ]
                    },
                    responseType: 'json',
                    headers: {
                        "Authorization": key
                    }
                })
                console.log(body)
            }
        })();
    })();
}

var collectionFk = '254';
var consultaSql1 = {
    uno: {
        id: 1025963,
        ticketFk: 2516988,
        level: 1,
        wagon: 0,
    },
    dos: {
        id: 1025964,
        ticketFk: 2542131,
        level: 2,
        wagon: 0,
    }
}
var consultaSql2 = {
    uno: {
        id: 1025963,
        nickname: 'FLORA&CO',
        agencyModeFk: 'MRW'//Seria un numero
    },
    dos: {
        id: 1025964,
        nickname: 'MORRIS',
        agencyModeFk: 'MRW'//Seria un numero
    }
}
