export interface productInterface {
        uniqueID: string;
        partNumber: string;
        name: string;
        locals: {
        outOfStockList: {
        xCatEntryQuantity: boolean,
        blacklist: boolean,
        },
        unavailableList: {
        blacklist: boolean
        },
        promotion: {
        stock: boolean,
        badge: boolean,
        },
        };
        fullImage: string;
        images: any;
        prices: {
        offerPrice: number,
        listPrice: number,
        cardPrice: number,
        discount: number,
        discountPercentage: number,
        ripleyPuntos: number,
        $$cache: {
        cached: boolean,
        created: number,
        },
        formattedOfferPrice: string,
        formattedListPrice: string,
        formattedCardPrice: string,
        formattedDiscount: string,
        };
        shortDescription: string;
        longDescription: string;
        definingAttributes: [
        {
            displayable: boolean,
            id: string,
            identifier: string,
            name: string,
            usage: string,
            values: any,
        }
        ];
        attributes: any;
        shipping: {
        rTienda: boolean,
        dDomicilio: boolean,
        rCercano: boolean,
        cashOnDelivery: boolean,
        };
        parentProductID: string;
        xCatEntryCategory: string;
        productString: string;
        isMarketplaceProduct: boolean;
        marketplace: object;
        warranties: any;
        url: string;
        thumbnailImage: string;
        simple: object;
        single: boolean
}
