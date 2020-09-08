export const schemaMap = new Map([
    [
        "enumeration",
        {
            _id: "Enumeration",
            _name: "Enumeration",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "intangible",
        {
            _id: "Intangible",
            _name: "Intangible",
            _parent: [
                "Thing"
            ]
        }
    ],
    [
        "thing",
        {
            _id: "Thing",
            _name: "Thing",
            _parent: [],
            additionalType: [
                "URL"
            ],
            alternateName: [
                "Text"
            ],
            description: [
                "Text"
            ],
            disambiguatingDescription: [
                "Text"
            ],
            identifier: [
                "Text",
                "PropertyValue",
                "URL"
            ],
            image: [
                "URL",
                "ImageObject"
            ],
            mainEntityOfPage: [
                "URL",
                "CreativeWork"
            ],
            name: [
                "Text"
            ],
            potentialAction: [
                "Action"
            ],
            sameAs: [
                "URL"
            ],
            subjectOf: [
                "CreativeWork",
                "Event"
            ],
            url: [
                "URL"
            ]
        }
    ],
    [
        "place",
        {
            _id: "Place",
            _name: "Place",
            _parent: [
                "Thing"
            ],
            additionalProperty: [
                "PropertyValue"
            ],
            address: [
                "PostalAddress",
                "Text"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            amenityFeature: [
                "LocationFeatureSpecification"
            ],
            branchCode: [
                "Text"
            ],
            containedInPlace: [
                "Place"
            ],
            containsPlace: [
                "Place"
            ],
            event: [
                "Event"
            ],
            faxNumber: [
                "Text"
            ],
            geo: [
                "GeoCoordinates",
                "GeoShape"
            ],
            geoContains: [
                "Place"
            ],
            geoCoveredBy: [
                "Place"
            ],
            geoCovers: [
                "Place"
            ],
            geoCrosses: [
                "Place"
            ],
            geoDisjoint: [
                "Place"
            ],
            geoEquals: [
                "Place"
            ],
            geoIntersects: [
                "Place"
            ],
            geoOverlaps: [
                "Place"
            ],
            geoTouches: [
                "Place"
            ],
            geoWithin: [
                "Place"
            ],
            globalLocationNumber: [
                "Text"
            ],
            hasMap: [
                "Map",
                "URL"
            ],
            isAccessibleForFree: [
                "Boolean"
            ],
            isicV4: [
                "Text"
            ],
            latitude: [
                "Number",
                "Text"
            ],
            logo: [
                "URL",
                "ImageObject"
            ],
            longitude: [
                "Text",
                "Number"
            ],
            maximumAttendeeCapacity: [
                "Integer"
            ],
            openingHoursSpecification: [
                "OpeningHoursSpecification"
            ],
            photo: [
                "ImageObject",
                "Photograph"
            ],
            publicAccess: [
                "Boolean"
            ],
            review: [
                "Review"
            ],
            slogan: [
                "Text"
            ],
            smokingAllowed: [
                "Boolean"
            ],
            specialOpeningHoursSpecification: [
                "OpeningHoursSpecification"
            ],
            telephone: [
                "Text"
            ]
        }
    ],
    [
        "event",
        {
            _id: "Event",
            _name: "Event",
            _parent: [
                "Thing"
            ],
            about: [
                "Thing"
            ],
            actor: [
                "Person"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            attendee: [
                "Person",
                "Organization"
            ],
            audience: [
                "Audience"
            ],
            composer: [
                "Person",
                "Organization"
            ],
            contributor: [
                "Organization",
                "Person"
            ],
            director: [
                "Person"
            ],
            doorTime: [
                "Time",
                "DateTime"
            ],
            duration: [
                "Duration"
            ],
            endDate: [
                "Date",
                "DateTime"
            ],
            eventStatus: [
                "EventStatusType"
            ],
            funder: [
                "Person",
                "Organization"
            ],
            inLanguage: [
                "Language",
                "Text"
            ],
            isAccessibleForFree: [
                "Boolean"
            ],
            location: [
                "Place",
                "PostalAddress",
                "Text"
            ],
            maximumAttendeeCapacity: [
                "Integer"
            ],
            offers: [
                "Demand",
                "Offer"
            ],
            organizer: [
                "Person",
                "Organization"
            ],
            performer: [
                "Organization",
                "Person"
            ],
            previousStartDate: [
                "Date"
            ],
            recordedIn: [
                "CreativeWork"
            ],
            remainingAttendeeCapacity: [
                "Integer"
            ],
            review: [
                "Review"
            ],
            sponsor: [
                "Organization",
                "Person"
            ],
            startDate: [
                "Date",
                "DateTime"
            ],
            subEvent: [
                "Event"
            ],
            superEvent: [
                "Event"
            ],
            translator: [
                "Person",
                "Organization"
            ],
            typicalAgeRange: [
                "Text"
            ],
            workFeatured: [
                "CreativeWork"
            ],
            workPerformed: [
                "CreativeWork"
            ]
        }
    ],
    [
        "integer",
        {
            _id: "Integer",
            _name: "Integer",
            _parent: [
                "Number"
            ]
        }
    ],
    [
        "airline",
        {
            _id: "Airline",
            _name: "Airline",
            _parent: [
                "Organization"
            ],
            boardingPolicy: [
                "BoardingPolicyType"
            ],
            iataCode: [
                "Text"
            ]
        }
    ],
    [
        "organization",
        {
            _id: "Organization",
            _name: "Organization",
            _parent: [
                "Thing"
            ],
            address: [
                "PostalAddress",
                "Text"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            alumni: [
                "Person"
            ],
            areaServed: [
                "Text",
                "GeoShape",
                "AdministrativeArea",
                "Place"
            ],
            award: [
                "Text"
            ],
            brand: [
                "Brand",
                "Organization"
            ],
            contactPoint: [
                "ContactPoint"
            ],
            department: [
                "Organization"
            ],
            dissolutionDate: [
                "Date"
            ],
            duns: [
                "Text"
            ],
            email: [
                "Text"
            ],
            employee: [
                "Person"
            ],
            event: [
                "Event"
            ],
            faxNumber: [
                "Text"
            ],
            founder: [
                "Person"
            ],
            foundingDate: [
                "Date"
            ],
            foundingLocation: [
                "Place"
            ],
            funder: [
                "Person",
                "Organization"
            ],
            globalLocationNumber: [
                "Text"
            ],
            hasOfferCatalog: [
                "OfferCatalog"
            ],
            hasPOS: [
                "Place"
            ],
            interactionStatistic: [
                "InteractionCounter"
            ],
            isicV4: [
                "Text"
            ],
            legalName: [
                "Text"
            ],
            leiCode: [
                "Text"
            ],
            location: [
                "Place",
                "PostalAddress",
                "Text"
            ],
            logo: [
                "URL",
                "ImageObject"
            ],
            makesOffer: [
                "Offer"
            ],
            member: [
                "Person",
                "Organization"
            ],
            memberOf: [
                "ProgramMembership",
                "Organization"
            ],
            naics: [
                "Text"
            ],
            numberOfEmployees: [
                "QuantitativeValue"
            ],
            owns: [
                "OwnershipInfo",
                "Product"
            ],
            parentOrganization: [
                "Organization"
            ],
            publishingPrinciples: [
                "CreativeWork",
                "URL"
            ],
            review: [
                "Review"
            ],
            seeks: [
                "Demand"
            ],
            slogan: [
                "Text"
            ],
            sponsor: [
                "Organization",
                "Person"
            ],
            subOrganization: [
                "Organization"
            ],
            taxID: [
                "Text"
            ],
            telephone: [
                "Text"
            ],
            vatID: [
                "Text"
            ]
        }
    ],
    [
        "drugcost",
        {
            _id: "DrugCost",
            _name: "DrugCost",
            _parent: [
                "MedicalEntity"
            ],
            applicableLocation: [
                "AdministrativeArea"
            ],
            costCategory: [
                "DrugCostCategory"
            ],
            costCurrency: [
                "Text"
            ],
            costOrigin: [
                "Text"
            ],
            costPerUnit: [
                "Text",
                "QualitativeValue",
                "Number"
            ],
            drugUnit: [
                "Text"
            ]
        }
    ],
    [
        "medicalentity",
        {
            _id: "MedicalEntity",
            _name: "MedicalEntity",
            _parent: [
                "Thing"
            ],
            code: [
                "MedicalCode"
            ],
            guideline: [
                "MedicalGuideline"
            ],
            legalStatus: [
                "DrugLegalStatus",
                "MedicalEnumeration",
                "Text"
            ],
            medicineSystem: [
                "MedicineSystem"
            ],
            recognizingAuthority: [
                "Organization"
            ],
            relevantSpecialty: [
                "MedicalSpecialty"
            ],
            study: [
                "MedicalStudy"
            ]
        }
    ],
    [
        "structuredvalue",
        {
            _id: "StructuredValue",
            _name: "StructuredValue",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "person",
        {
            _id: "Person",
            _name: "Person",
            _parent: [
                "Thing"
            ],
            additionalName: [
                "Text"
            ],
            address: [
                "PostalAddress",
                "Text"
            ],
            affiliation: [
                "Organization"
            ],
            alumniOf: [
                "EducationalOrganization",
                "Organization"
            ],
            award: [
                "Text"
            ],
            birthDate: [
                "Date"
            ],
            birthPlace: [
                "Place"
            ],
            brand: [
                "Brand",
                "Organization"
            ],
            children: [
                "Person"
            ],
            colleague: [
                "Person",
                "URL"
            ],
            contactPoint: [
                "ContactPoint"
            ],
            deathDate: [
                "Date"
            ],
            deathPlace: [
                "Place"
            ],
            duns: [
                "Text"
            ],
            email: [
                "Text"
            ],
            familyName: [
                "Text"
            ],
            faxNumber: [
                "Text"
            ],
            follows: [
                "Person"
            ],
            funder: [
                "Person",
                "Organization"
            ],
            givenName: [
                "Text"
            ],
            globalLocationNumber: [
                "Text"
            ],
            hasOccupation: [
                "Occupation"
            ],
            hasOfferCatalog: [
                "OfferCatalog"
            ],
            hasPOS: [
                "Place"
            ],
            height: [
                "QuantitativeValue",
                "Distance"
            ],
            homeLocation: [
                "ContactPoint",
                "Place"
            ],
            honorificPrefix: [
                "Text"
            ],
            honorificSuffix: [
                "Text"
            ],
            interactionStatistic: [
                "InteractionCounter"
            ],
            isicV4: [
                "Text"
            ],
            knows: [
                "Person"
            ],
            makesOffer: [
                "Offer"
            ],
            memberOf: [
                "ProgramMembership",
                "Organization"
            ],
            naics: [
                "Text"
            ],
            nationality: [
                "Country"
            ],
            netWorth: [
                "PriceSpecification",
                "MonetaryAmount"
            ],
            owns: [
                "OwnershipInfo",
                "Product"
            ],
            parent: [
                "Person"
            ],
            performerIn: [
                "Event"
            ],
            publishingPrinciples: [
                "CreativeWork",
                "URL"
            ],
            relatedTo: [
                "Person"
            ],
            seeks: [
                "Demand"
            ],
            sibling: [
                "Person"
            ],
            sponsor: [
                "Organization",
                "Person"
            ],
            spouse: [
                "Person"
            ],
            taxID: [
                "Text"
            ],
            telephone: [
                "Text"
            ],
            vatID: [
                "Text"
            ],
            weight: [
                "QuantitativeValue"
            ],
            workLocation: [
                "ContactPoint",
                "Place"
            ],
            worksFor: [
                "Organization"
            ]
        }
    ],
    [
        "product",
        {
            _id: "Product",
            _name: "Product",
            _parent: [
                "Thing"
            ],
            additionalProperty: [
                "PropertyValue"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            audience: [
                "Audience"
            ],
            award: [
                "Text"
            ],
            brand: [
                "Brand",
                "Organization"
            ],
            category: [
                "URL",
                "Text",
                "Thing",
                "PhysicalActivityCategory"
            ],
            color: [
                "Text"
            ],
            depth: [
                "Distance",
                "QuantitativeValue"
            ],
            gtin12: [
                "Text"
            ],
            gtin13: [
                "Text"
            ],
            gtin14: [
                "Text"
            ],
            gtin8: [
                "Text"
            ],
            hasEnergyConsumptionDetails: [],
            height: [
                "QuantitativeValue",
                "Distance"
            ],
            isAccessoryOrSparePartFor: [
                "Product"
            ],
            isConsumableFor: [
                "Product"
            ],
            isRelatedTo: [
                "Service",
                "Product"
            ],
            isSimilarTo: [
                "Service",
                "Product"
            ],
            isVariantOf: [
                "ProductModel"
            ],
            itemCondition: [
                "OfferItemCondition"
            ],
            logo: [
                "URL",
                "ImageObject"
            ],
            manufacturer: [
                "Organization"
            ],
            material: [
                "URL",
                "Text",
                "Product"
            ],
            model: [
                "ProductModel",
                "Text"
            ],
            mpn: [
                "Text"
            ],
            offers: [
                "Demand",
                "Offer"
            ],
            productID: [
                "Text"
            ],
            productionDate: [
                "Date"
            ],
            purchaseDate: [
                "Date"
            ],
            releaseDate: [
                "Date"
            ],
            review: [
                "Review"
            ],
            sku: [
                "Text"
            ],
            slogan: [
                "Text"
            ],
            weight: [
                "QuantitativeValue"
            ],
            width: [
                "Distance",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "liveblogposting",
        {
            _id: "LiveBlogPosting",
            _name: "LiveBlogPosting",
            _parent: [
                "BlogPosting"
            ],
            coverageEndTime: [
                "DateTime"
            ],
            coverageStartTime: [
                "DateTime"
            ],
            liveBlogUpdate: [
                "BlogPosting"
            ]
        }
    ],
    [
        "blogposting",
        {
            _id: "BlogPosting",
            _name: "BlogPosting",
            _parent: [
                "SocialMediaPosting"
            ]
        }
    ],
    [
        "socialmediaposting",
        {
            _id: "SocialMediaPosting",
            _name: "SocialMediaPosting",
            _parent: [
                "Article"
            ],
            sharedContent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "article",
        {
            _id: "Article",
            _name: "Article",
            _parent: [
                "CreativeWork"
            ],
            articleBody: [
                "Text"
            ],
            articleSection: [
                "Text"
            ],
            pageEnd: [
                "Integer",
                "Text"
            ],
            pageStart: [
                "Text",
                "Integer"
            ],
            pagination: [
                "Text"
            ],
            speakable: [
                "SpeakableSpecification",
                "URL"
            ],
            wordCount: [
                "Integer"
            ]
        }
    ],
    [
        "creativework",
        {
            _id: "CreativeWork",
            _name: "CreativeWork",
            _parent: [
                "Thing"
            ],
            about: [
                "Thing"
            ],
            accessibilityAPI: [
                "Text"
            ],
            accessibilityControl: [
                "Text"
            ],
            accessibilityFeature: [
                "Text"
            ],
            accessibilityHazard: [
                "Text"
            ],
            accessibilitySummary: [
                "Text"
            ],
            accessMode: [
                "Text"
            ],
            accessModeSufficient: [
                "ItemList"
            ],
            accountablePerson: [
                "Person"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            alternativeHeadline: [
                "Text"
            ],
            associatedMedia: [
                "MediaObject"
            ],
            audience: [
                "Audience"
            ],
            audio: [
                "AudioObject",
                "MusicRecording",
                "Clip"
            ],
            author: [
                "Organization",
                "Person"
            ],
            award: [
                "Text"
            ],
            character: [
                "Person"
            ],
            citation: [
                "CreativeWork",
                "Text"
            ],
            comment: [
                "Comment"
            ],
            commentCount: [
                "Integer"
            ],
            contentLocation: [
                "Place"
            ],
            contentRating: [
                "Rating",
                "Text"
            ],
            contributor: [
                "Organization",
                "Person"
            ],
            copyrightHolder: [
                "Organization",
                "Person"
            ],
            copyrightYear: [
                "Number"
            ],
            creator: [
                "Person",
                "Organization"
            ],
            dateCreated: [
                "Date",
                "DateTime"
            ],
            dateModified: [
                "DateTime",
                "Date"
            ],
            datePublished: [
                "DateTime",
                "Date"
            ],
            discussionUrl: [
                "URL"
            ],
            editor: [
                "Person"
            ],
            educationalAlignment: [
                "AlignmentObject"
            ],
            educationalUse: [
                "Text"
            ],
            encoding: [
                "MediaObject"
            ],
            encodingFormat: [
                "Text",
                "URL"
            ],
            exampleOfWork: [
                "CreativeWork"
            ],
            expires: [
                "Date"
            ],
            funder: [
                "Person",
                "Organization"
            ],
            genre: [
                "URL",
                "Text"
            ],
            hasPart: [
                "CreativeWork"
            ],
            headline: [
                "Text"
            ],
            inLanguage: [
                "Language",
                "Text"
            ],
            interactionStatistic: [
                "InteractionCounter"
            ],
            interactivityType: [
                "Text"
            ],
            isAccessibleForFree: [
                "Boolean"
            ],
            isBasedOn: [
                "URL",
                "CreativeWork",
                "Product"
            ],
            isFamilyFriendly: [
                "Boolean"
            ],
            isPartOf: [
                "URL",
                "CreativeWork"
            ],
            keywords: [
                "URL",
                "Text"
            ],
            learningResourceType: [
                "Text"
            ],
            license: [
                "URL",
                "CreativeWork"
            ],
            locationCreated: [
                "Place"
            ],
            mainEntity: [
                "Thing"
            ],
            material: [
                "URL",
                "Text",
                "Product"
            ],
            mentions: [
                "Thing"
            ],
            offers: [
                "Demand",
                "Offer"
            ],
            position: [
                "Text",
                "Integer"
            ],
            producer: [
                "Organization",
                "Person"
            ],
            provider: [
                "Person",
                "Organization"
            ],
            publication: [
                "PublicationEvent"
            ],
            publisher: [
                "Organization",
                "Person"
            ],
            publisherImprint: [
                "Organization"
            ],
            publishingPrinciples: [
                "CreativeWork",
                "URL"
            ],
            recordedAt: [
                "Event"
            ],
            releasedEvent: [
                "PublicationEvent"
            ],
            review: [
                "Review"
            ],
            schemaVersion: [
                "URL",
                "Text"
            ],
            sourceOrganization: [
                "Organization"
            ],
            spatial: [
                "Place"
            ],
            spatialCoverage: [
                "Place"
            ],
            sponsor: [
                "Organization",
                "Person"
            ],
            temporal: [
                "Text",
                "DateTime"
            ],
            temporalCoverage: [
                "Text",
                "DateTime",
                "URL"
            ],
            text: [
                "Text"
            ],
            thumbnailUrl: [
                "URL"
            ],
            timeRequired: [
                "Duration"
            ],
            translationOfWork: [
                "CreativeWork"
            ],
            translator: [
                "Person",
                "Organization"
            ],
            typicalAgeRange: [
                "Text"
            ],
            version: [
                "Text",
                "Number"
            ],
            video: [
                "Clip",
                "VideoObject"
            ],
            workExample: [
                "CreativeWork"
            ],
            workTranslation: [
                "CreativeWork"
            ]
        }
    ],
    [
        "broadcastservice",
        {
            _id: "BroadcastService",
            _name: "BroadcastService",
            _parent: [
                "Service"
            ],
            broadcastAffiliateOf: [
                "Organization"
            ],
            broadcastDisplayName: [
                "Text"
            ],
            broadcaster: [
                "Organization"
            ],
            broadcastFrequency: [
                "Text",
                "BroadcastFrequencySpecification"
            ],
            broadcastTimezone: [
                "Text"
            ],
            hasBroadcastChannel: [
                "BroadcastChannel"
            ],
            inLanguage: [
                "Language",
                "Text"
            ],
            parentService: [
                "BroadcastService"
            ],
            videoFormat: [
                "Text"
            ]
        }
    ],
    [
        "service",
        {
            _id: "Service",
            _name: "Service",
            _parent: [
                "Intangible"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            areaServed: [
                "Text",
                "GeoShape",
                "AdministrativeArea",
                "Place"
            ],
            audience: [
                "Audience"
            ],
            availableChannel: [
                "ServiceChannel"
            ],
            award: [
                "Text"
            ],
            brand: [
                "Brand",
                "Organization"
            ],
            broker: [
                "Organization",
                "Person"
            ],
            category: [
                "URL",
                "Text",
                "Thing",
                "PhysicalActivityCategory"
            ],
            hasOfferCatalog: [
                "OfferCatalog"
            ],
            hoursAvailable: [
                "OpeningHoursSpecification"
            ],
            isRelatedTo: [
                "Service",
                "Product"
            ],
            isSimilarTo: [
                "Service",
                "Product"
            ],
            logo: [
                "URL",
                "ImageObject"
            ],
            offers: [
                "Demand",
                "Offer"
            ],
            provider: [
                "Person",
                "Organization"
            ],
            providerMobility: [
                "Text"
            ],
            review: [
                "Review"
            ],
            serviceOutput: [
                "Thing"
            ],
            serviceType: [
                "Text"
            ],
            slogan: [
                "Text"
            ]
        }
    ],
    [
        "duration",
        {
            _id: "Duration",
            _name: "Duration",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "quantity",
        {
            _id: "Quantity",
            _name: "Quantity",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "interactioncounter",
        {
            _id: "InteractionCounter",
            _name: "InteractionCounter",
            _parent: [
                "StructuredValue"
            ],
            interactionService: [
                "WebSite",
                "SoftwareApplication"
            ],
            interactionType: [
                "Action"
            ],
            userInteractionCount: [
                "Integer"
            ]
        }
    ],
    [
        "tvepisode",
        {
            _id: "TVEpisode",
            _name: "TVEpisode",
            _parent: [
                "Episode"
            ],
            countryOfOrigin: [
                "Country"
            ]
        }
    ],
    [
        "episode",
        {
            _id: "Episode",
            _name: "Episode",
            _parent: [
                "CreativeWork"
            ],
            actor: [
                "Person"
            ],
            director: [
                "Person"
            ],
            episodeNumber: [
                "Text",
                "Integer"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            partOfSeason: [
                "CreativeWorkSeason"
            ],
            partOfSeries: [
                "CreativeWorkSeries"
            ],
            productionCompany: [
                "Organization"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "tvclip",
        {
            _id: "TVClip",
            _name: "TVClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "clip",
        {
            _id: "Clip",
            _name: "Clip",
            _parent: [
                "CreativeWork"
            ],
            actor: [
                "Person"
            ],
            clipNumber: [
                "Text",
                "Integer"
            ],
            director: [
                "Person"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            partOfEpisode: [
                "Episode"
            ],
            partOfSeason: [
                "CreativeWorkSeason"
            ],
            partOfSeries: [
                "CreativeWorkSeries"
            ]
        }
    ],
    [
        "tvseason",
        {
            _id: "TVSeason",
            _name: "TVSeason",
            _parent: [
                "CreativeWork",
                "CreativeWorkSeason"
            ],
            countryOfOrigin: [
                "Country"
            ]
        }
    ],
    [
        "creativeworkseason",
        {
            _id: "CreativeWorkSeason",
            _name: "CreativeWorkSeason",
            _parent: [
                "CreativeWork"
            ],
            actor: [
                "Person"
            ],
            director: [
                "Person"
            ],
            endDate: [
                "Date",
                "DateTime"
            ],
            episode: [
                "Episode"
            ],
            numberOfEpisodes: [
                "Integer"
            ],
            partOfSeries: [
                "CreativeWorkSeries"
            ],
            productionCompany: [
                "Organization"
            ],
            seasonNumber: [
                "Integer",
                "Text"
            ],
            startDate: [
                "Date",
                "DateTime"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "tvseries",
        {
            _id: "TVSeries",
            _name: "TVSeries",
            _parent: [
                "CreativeWork",
                "CreativeWorkSeries"
            ],
            actor: [
                "Person"
            ],
            containsSeason: [
                "CreativeWorkSeason"
            ],
            countryOfOrigin: [
                "Country"
            ],
            director: [
                "Person"
            ],
            episode: [
                "Episode"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            numberOfEpisodes: [
                "Integer"
            ],
            numberOfSeasons: [
                "Integer"
            ],
            productionCompany: [
                "Organization"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "creativeworkseries",
        {
            _id: "CreativeWorkSeries",
            _name: "CreativeWorkSeries",
            _parent: [
                "Series",
                "CreativeWork"
            ],
            endDate: [
                "Date",
                "DateTime"
            ],
            issn: [
                "Text"
            ],
            startDate: [
                "Date",
                "DateTime"
            ]
        }
    ],
    [
        "series",
        {
            _id: "Series",
            _name: "Series",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "url",
        {
            _id: "URL",
            _name: "URL",
            _parent: [
                "Text"
            ]
        }
    ],
    [
        "flight",
        {
            _id: "Flight",
            _name: "Flight",
            _parent: [
                "Trip"
            ],
            aircraft: [
                "Text",
                "Vehicle"
            ],
            arrivalAirport: [
                "Airport"
            ],
            arrivalGate: [
                "Text"
            ],
            arrivalTerminal: [
                "Text"
            ],
            boardingPolicy: [
                "BoardingPolicyType"
            ],
            departureAirport: [
                "Airport"
            ],
            departureGate: [
                "Text"
            ],
            departureTerminal: [
                "Text"
            ],
            estimatedFlightDuration: [
                "Text",
                "Duration"
            ],
            flightDistance: [
                "Text",
                "Distance"
            ],
            flightNumber: [
                "Text"
            ],
            mealService: [
                "Text"
            ],
            seller: [
                "Person",
                "Organization"
            ],
            webCheckinTime: [
                "DateTime"
            ]
        }
    ],
    [
        "trip",
        {
            _id: "Trip",
            _name: "Trip",
            _parent: [
                "Intangible"
            ],
            arrivalTime: [
                "Time",
                "DateTime"
            ],
            departureTime: [
                "DateTime",
                "Time"
            ],
            offers: [
                "Demand",
                "Offer"
            ],
            provider: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "parceldelivery",
        {
            _id: "ParcelDelivery",
            _name: "ParcelDelivery",
            _parent: [
                "Intangible"
            ],
            deliveryAddress: [
                "PostalAddress"
            ],
            deliveryStatus: [
                "DeliveryEvent"
            ],
            expectedArrivalFrom: [
                "DateTime",
                "Date"
            ],
            expectedArrivalUntil: [
                "DateTime",
                "Date"
            ],
            hasDeliveryMethod: [
                "DeliveryMethod"
            ],
            itemShipped: [
                "Product"
            ],
            originAddress: [
                "PostalAddress"
            ],
            partOfOrder: [
                "Order"
            ],
            provider: [
                "Person",
                "Organization"
            ],
            trackingNumber: [
                "Text"
            ],
            trackingUrl: [
                "URL"
            ]
        }
    ],
    [
        "invoice",
        {
            _id: "Invoice",
            _name: "Invoice",
            _parent: [
                "Intangible"
            ],
            accountId: [
                "Text"
            ],
            billingPeriod: [
                "Duration"
            ],
            broker: [
                "Organization",
                "Person"
            ],
            category: [
                "URL",
                "Text",
                "Thing",
                "PhysicalActivityCategory"
            ],
            confirmationNumber: [
                "Text"
            ],
            customer: [
                "Organization",
                "Person"
            ],
            minimumPaymentDue: [
                "MonetaryAmount",
                "PriceSpecification"
            ],
            paymentDueDate: [
                "DateTime",
                "Date"
            ],
            paymentMethod: [
                "PaymentMethod"
            ],
            paymentMethodId: [
                "Text"
            ],
            paymentStatus: [
                "PaymentStatusType",
                "Text"
            ],
            provider: [
                "Person",
                "Organization"
            ],
            referencesOrder: [
                "Order"
            ],
            scheduledPaymentDate: [
                "Date"
            ],
            totalPaymentDue: [
                "PriceSpecification",
                "MonetaryAmount"
            ]
        }
    ],
    [
        "reservation",
        {
            _id: "Reservation",
            _name: "Reservation",
            _parent: [
                "Intangible"
            ],
            bookingTime: [
                "DateTime"
            ],
            broker: [
                "Organization",
                "Person"
            ],
            modifiedTime: [
                "DateTime"
            ],
            priceCurrency: [
                "Text"
            ],
            programMembershipUsed: [
                "ProgramMembership"
            ],
            provider: [
                "Person",
                "Organization"
            ],
            reservationFor: [
                "Thing"
            ],
            reservationId: [
                "Text"
            ],
            reservationStatus: [
                "ReservationStatusType"
            ],
            reservedTicket: [
                "Ticket"
            ],
            totalPrice: [
                "Number",
                "PriceSpecification",
                "Text"
            ],
            underName: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "medicaltherapy",
        {
            _id: "MedicalTherapy",
            _name: "MedicalTherapy",
            _parent: [
                "TherapeuticProcedure"
            ],
            contraindication: [
                "Text",
                "MedicalContraindication"
            ],
            duplicateTherapy: [
                "MedicalTherapy"
            ],
            seriousAdverseOutcome: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "therapeuticprocedure",
        {
            _id: "TherapeuticProcedure",
            _name: "TherapeuticProcedure",
            _parent: [
                "MedicalProcedure"
            ],
            adverseOutcome: [
                "MedicalEntity"
            ],
            doseSchedule: [
                "DoseSchedule"
            ],
            drug: [
                "Drug"
            ]
        }
    ],
    [
        "medicalprocedure",
        {
            _id: "MedicalProcedure",
            _name: "MedicalProcedure",
            _parent: [
                "MedicalEntity"
            ],
            bodyLocation: [
                "Text"
            ],
            followup: [
                "Text"
            ],
            howPerformed: [
                "Text"
            ],
            preparation: [
                "MedicalEntity",
                "Text"
            ],
            procedureType: [
                "MedicalProcedureType"
            ],
            status: [
                "Text",
                "EventStatusType",
                "MedicalStudyStatus"
            ]
        }
    ],
    [
        "nutritioninformation",
        {
            _id: "NutritionInformation",
            _name: "NutritionInformation",
            _parent: [
                "StructuredValue"
            ],
            calories: [
                "Energy"
            ],
            carbohydrateContent: [
                "Mass"
            ],
            cholesterolContent: [
                "Mass"
            ],
            fatContent: [
                "Mass"
            ],
            fiberContent: [
                "Mass"
            ],
            proteinContent: [
                "Mass"
            ],
            saturatedFatContent: [
                "Mass"
            ],
            servingSize: [
                "Text"
            ],
            sodiumContent: [
                "Mass"
            ],
            sugarContent: [
                "Mass"
            ],
            transFatContent: [
                "Mass"
            ],
            unsaturatedFatContent: [
                "Mass"
            ]
        }
    ],
    [
        "mass",
        {
            _id: "Mass",
            _name: "Mass",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "vehicle",
        {
            _id: "Vehicle",
            _name: "Vehicle",
            _parent: [
                "Product"
            ],
            accelerationTime: [
                "QuantitativeValue"
            ],
            bodyType: [
                "URL",
                "Text",
                "QualitativeValue"
            ],
            cargoVolume: [
                "QuantitativeValue"
            ],
            dateVehicleFirstRegistered: [
                "Date"
            ],
            driveWheelConfiguration: [
                "Text",
                "DriveWheelConfigurationValue"
            ],
            emissionsCO2: [
                "Number"
            ],
            fuelCapacity: [
                "QuantitativeValue"
            ],
            fuelConsumption: [
                "QuantitativeValue"
            ],
            fuelEfficiency: [
                "QuantitativeValue"
            ],
            fuelType: [
                "URL",
                "Text",
                "QualitativeValue"
            ],
            knownVehicleDamages: [
                "Text"
            ],
            meetsEmissionStandard: [
                "Text",
                "QualitativeValue",
                "URL"
            ],
            mileageFromOdometer: [
                "QuantitativeValue"
            ],
            modelDate: [
                "Date"
            ],
            numberOfAirbags: [
                "Number",
                "Text"
            ],
            numberOfAxles: [
                "QuantitativeValue",
                "Number"
            ],
            numberOfDoors: [
                "QuantitativeValue",
                "Number"
            ],
            numberOfForwardGears: [
                "Number",
                "QuantitativeValue"
            ],
            numberOfPreviousOwners: [
                "QuantitativeValue",
                "Number"
            ],
            payload: [
                "QuantitativeValue"
            ],
            productionDate: [
                "Date"
            ],
            purchaseDate: [
                "Date"
            ],
            seatingCapacity: [
                "Number",
                "QuantitativeValue"
            ],
            speed: [
                "QuantitativeValue"
            ],
            steeringPosition: [
                "SteeringPositionValue"
            ],
            tongueWeight: [
                "QuantitativeValue"
            ],
            trailerWeight: [
                "QuantitativeValue"
            ],
            vehicleConfiguration: [
                "Text"
            ],
            vehicleEngine: [
                "EngineSpecification"
            ],
            vehicleIdentificationNumber: [
                "Text"
            ],
            vehicleInteriorColor: [
                "Text"
            ],
            vehicleInteriorType: [
                "Text"
            ],
            vehicleModelDate: [
                "Date"
            ],
            vehicleSeatingCapacity: [
                "QuantitativeValue",
                "Number"
            ],
            vehicleSpecialUsage: [
                "Text",
                "CarUsageType"
            ],
            vehicleTransmission: [
                "Text",
                "URL",
                "QualitativeValue"
            ],
            weightTotal: [
                "QuantitativeValue"
            ],
            wheelbase: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "bikestore",
        {
            _id: "BikeStore",
            _name: "BikeStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "store",
        {
            _id: "Store",
            _name: "Store",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "localbusiness",
        {
            _id: "LocalBusiness",
            _name: "LocalBusiness",
            _parent: [
                "Organization",
                "Place"
            ],
            currenciesAccepted: [
                "Text"
            ],
            openingHours: [
                "Text"
            ],
            paymentAccepted: [
                "Text"
            ],
            priceRange: [
                "Text"
            ]
        }
    ],
    [
        "lodgingreservation",
        {
            _id: "LodgingReservation",
            _name: "LodgingReservation",
            _parent: [
                "Reservation"
            ],
            checkinTime: [
                "DateTime",
                "Time"
            ],
            checkoutTime: [
                "Time",
                "DateTime"
            ],
            lodgingUnitDescription: [
                "Text"
            ],
            lodgingUnitType: [
                "QualitativeValue",
                "Text"
            ],
            numAdults: [
                "Integer",
                "QuantitativeValue"
            ],
            numChildren: [
                "Integer",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "order",
        {
            _id: "Order",
            _name: "Order",
            _parent: [
                "Intangible"
            ],
            acceptedOffer: [
                "Offer"
            ],
            billingAddress: [
                "PostalAddress"
            ],
            broker: [
                "Organization",
                "Person"
            ],
            confirmationNumber: [
                "Text"
            ],
            customer: [
                "Organization",
                "Person"
            ],
            discount: [
                "Text",
                "Number"
            ],
            discountCode: [
                "Text"
            ],
            discountCurrency: [
                "Text"
            ],
            isGift: [
                "Boolean"
            ],
            orderDate: [
                "DateTime",
                "Date"
            ],
            orderDelivery: [
                "ParcelDelivery"
            ],
            orderedItem: [
                "Product",
                "OrderItem",
                "Service"
            ],
            orderNumber: [
                "Text"
            ],
            orderStatus: [
                "OrderStatus"
            ],
            partOfInvoice: [
                "Invoice"
            ],
            paymentDueDate: [
                "DateTime",
                "Date"
            ],
            paymentMethod: [
                "PaymentMethod"
            ],
            paymentMethodId: [
                "Text"
            ],
            paymentUrl: [
                "URL"
            ],
            seller: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "softwaresourcecode",
        {
            _id: "SoftwareSourceCode",
            _name: "SoftwareSourceCode",
            _parent: [
                "CreativeWork"
            ],
            codeRepository: [
                "URL"
            ],
            codeSampleType: [
                "Text"
            ],
            programmingLanguage: [
                "ComputerLanguage",
                "Text"
            ],
            runtimePlatform: [
                "Text"
            ],
            targetProduct: [
                "SoftwareApplication"
            ]
        }
    ],
    [
        "buddhisttemple",
        {
            _id: "BuddhistTemple",
            _name: "BuddhistTemple",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "placeofworship",
        {
            _id: "PlaceOfWorship",
            _name: "PlaceOfWorship",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "civicstructure",
        {
            _id: "CivicStructure",
            _name: "CivicStructure",
            _parent: [
                "Place"
            ],
            openingHours: [
                "Text"
            ]
        }
    ],
    [
        "medicaldevice",
        {
            _id: "MedicalDevice",
            _name: "MedicalDevice",
            _parent: [
                "MedicalEntity"
            ],
            adverseOutcome: [
                "MedicalEntity"
            ],
            contraindication: [
                "Text",
                "MedicalContraindication"
            ],
            postOp: [
                "Text"
            ],
            preOp: [
                "Text"
            ],
            procedure: [
                "Text"
            ],
            seriousAdverseOutcome: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "patient",
        {
            _id: "Patient",
            _name: "Patient",
            _parent: [
                "MedicalAudience",
                "Person"
            ],
            diagnosis: [
                "MedicalCondition"
            ],
            drug: [
                "Drug"
            ],
            healthCondition: [
                "MedicalCondition"
            ]
        }
    ],
    [
        "medicalaudience",
        {
            _id: "MedicalAudience",
            _name: "MedicalAudience",
            _parent: [
                "PeopleAudience",
                "Audience"
            ]
        }
    ],
    [
        "peopleaudience",
        {
            _id: "PeopleAudience",
            _name: "PeopleAudience",
            _parent: [
                "Audience"
            ],
            healthCondition: [
                "MedicalCondition"
            ],
            requiredGender: [
                "Text"
            ],
            requiredMaxAge: [
                "Integer"
            ],
            requiredMinAge: [
                "Integer"
            ],
            suggestedGender: [
                "Text"
            ],
            suggestedMaxAge: [
                "Number"
            ],
            suggestedMinAge: [
                "Number"
            ]
        }
    ],
    [
        "audience",
        {
            _id: "Audience",
            _name: "Audience",
            _parent: [
                "Intangible"
            ],
            audienceType: [
                "Text"
            ],
            geographicArea: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "drugclass",
        {
            _id: "DrugClass",
            _name: "DrugClass",
            _parent: [
                "MedicalEntity"
            ],
            drug: [
                "Drug"
            ]
        }
    ],
    [
        "medicalcondition",
        {
            _id: "MedicalCondition",
            _name: "MedicalCondition",
            _parent: [
                "MedicalEntity"
            ],
            associatedAnatomy: [
                "SuperficialAnatomy",
                "AnatomicalStructure",
                "AnatomicalSystem"
            ],
            differentialDiagnosis: [
                "DDxElement"
            ],
            drug: [
                "Drug"
            ],
            epidemiology: [
                "Text"
            ],
            expectedPrognosis: [
                "Text"
            ],
            naturalProgression: [
                "Text"
            ],
            pathophysiology: [
                "Text"
            ],
            possibleComplication: [
                "Text"
            ],
            possibleTreatment: [
                "MedicalTherapy"
            ],
            primaryPrevention: [
                "MedicalTherapy"
            ],
            riskFactor: [
                "MedicalRiskFactor"
            ],
            secondaryPrevention: [
                "MedicalTherapy"
            ],
            signOrSymptom: [
                "MedicalSignOrSymptom"
            ],
            stage: [
                "MedicalConditionStage"
            ],
            status: [
                "Text",
                "EventStatusType",
                "MedicalStudyStatus"
            ],
            typicalTest: [
                "MedicalTest"
            ]
        }
    ],
    [
        "drug",
        {
            _id: "Drug",
            _name: "Drug",
            _parent: [
                "Substance"
            ],
            activeIngredient: [
                "Text"
            ],
            administrationRoute: [
                "Text"
            ],
            alcoholWarning: [
                "Text"
            ],
            availableStrength: [
                "DrugStrength"
            ],
            breastfeedingWarning: [
                "Text"
            ],
            clinicalPharmacology: [
                "Text"
            ],
            dosageForm: [
                "Text"
            ],
            doseSchedule: [
                "DoseSchedule"
            ],
            drugClass: [
                "DrugClass"
            ],
            drugUnit: [
                "Text"
            ],
            foodWarning: [
                "Text"
            ],
            interactingDrug: [
                "Drug"
            ],
            isAvailableGenerically: [
                "Boolean"
            ],
            isProprietary: [
                "Boolean"
            ],
            labelDetails: [
                "URL"
            ],
            legalStatus: [
                "DrugLegalStatus",
                "MedicalEnumeration",
                "Text"
            ],
            manufacturer: [
                "Organization"
            ],
            maximumIntake: [
                "MaximumDoseSchedule"
            ],
            mechanismOfAction: [
                "Text"
            ],
            nonProprietaryName: [
                "Text"
            ],
            overdosage: [
                "Text"
            ],
            pregnancyCategory: [
                "DrugPregnancyCategory"
            ],
            pregnancyWarning: [
                "Text"
            ],
            prescribingInfo: [
                "URL"
            ],
            prescriptionStatus: [
                "DrugPrescriptionStatus",
                "Text"
            ],
            proprietaryName: [
                "Text"
            ],
            relatedDrug: [
                "Drug"
            ],
            warning: [
                "Text",
                "URL"
            ]
        }
    ],
    [
        "substance",
        {
            _id: "Substance",
            _name: "Substance",
            _parent: [
                "MedicalEntity"
            ],
            activeIngredient: [
                "Text"
            ],
            maximumIntake: [
                "MaximumDoseSchedule"
            ]
        }
    ],
    [
        "action",
        {
            _id: "Action",
            _name: "Action",
            _parent: [
                "Thing"
            ],
            actionStatus: [
                "ActionStatusType"
            ],
            agent: [
                "Person",
                "Organization"
            ],
            endTime: [
                "Time",
                "DateTime"
            ],
            error: [
                "Thing"
            ],
            instrument: [
                "Thing"
            ],
            location: [
                "Place",
                "PostalAddress",
                "Text"
            ],
            object: [
                "Thing"
            ],
            participant: [
                "Organization",
                "Person"
            ],
            result: [
                "Thing"
            ],
            startTime: [
                "DateTime",
                "Time"
            ],
            target: [
                "EntryPoint"
            ]
        }
    ],
    [
        "medicalstudy",
        {
            _id: "MedicalStudy",
            _name: "MedicalStudy",
            _parent: [
                "MedicalEntity"
            ],
            healthCondition: [
                "MedicalCondition"
            ],
            sponsor: [
                "Organization",
                "Person"
            ],
            status: [
                "Text",
                "EventStatusType",
                "MedicalStudyStatus"
            ],
            studyLocation: [
                "AdministrativeArea"
            ],
            studySubject: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "medicaltest",
        {
            _id: "MedicalTest",
            _name: "MedicalTest",
            _parent: [
                "MedicalEntity"
            ],
            affectedBy: [
                "Drug"
            ],
            normalRange: [
                "Text",
                "MedicalEnumeration"
            ],
            signDetected: [
                "MedicalSign"
            ],
            usedToDiagnose: [
                "MedicalCondition"
            ],
            usesDevice: [
                "MedicalDevice"
            ]
        }
    ],
    [
        "monetaryamount",
        {
            _id: "MonetaryAmount",
            _name: "MonetaryAmount",
            _parent: [
                "StructuredValue"
            ],
            currency: [
                "Text"
            ],
            maxValue: [
                "Number"
            ],
            minValue: [
                "Number"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ],
            value: [
                "StructuredValue",
                "Boolean",
                "Text",
                "Number"
            ]
        }
    ],
    [
        "deliverychargespecification",
        {
            _id: "DeliveryChargeSpecification",
            _name: "DeliveryChargeSpecification",
            _parent: [
                "PriceSpecification"
            ],
            appliesToDeliveryMethod: [
                "DeliveryMethod"
            ],
            areaServed: [
                "Text",
                "GeoShape",
                "AdministrativeArea",
                "Place"
            ],
            eligibleRegion: [
                "GeoShape",
                "Place",
                "Text"
            ]
        }
    ],
    [
        "pricespecification",
        {
            _id: "PriceSpecification",
            _name: "PriceSpecification",
            _parent: [
                "StructuredValue"
            ],
            eligibleQuantity: [
                "QuantitativeValue"
            ],
            eligibleTransactionVolume: [
                "PriceSpecification"
            ],
            maxPrice: [
                "Number"
            ],
            minPrice: [
                "Number"
            ],
            price: [
                "Number",
                "Text"
            ],
            priceCurrency: [
                "Text"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ],
            valueAddedTaxIncluded: [
                "Boolean"
            ]
        }
    ],
    [
        "gardenstore",
        {
            _id: "GardenStore",
            _name: "GardenStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "airport",
        {
            _id: "Airport",
            _name: "Airport",
            _parent: [
                "CivicStructure"
            ],
            iataCode: [
                "Text"
            ],
            icaoCode: [
                "Text"
            ]
        }
    ],
    [
        "medicalguideline",
        {
            _id: "MedicalGuideline",
            _name: "MedicalGuideline",
            _parent: [
                "MedicalEntity"
            ],
            evidenceLevel: [
                "MedicalEvidenceLevel"
            ],
            evidenceOrigin: [
                "Text"
            ],
            guidelineDate: [
                "Date"
            ],
            guidelineSubject: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "foodestablishmentreservation",
        {
            _id: "FoodEstablishmentReservation",
            _name: "FoodEstablishmentReservation",
            _parent: [
                "Reservation"
            ],
            endTime: [
                "Time",
                "DateTime"
            ],
            partySize: [
                "Integer",
                "QuantitativeValue"
            ],
            startTime: [
                "DateTime",
                "Time"
            ]
        }
    ],
    [
        "mediaobject",
        {
            _id: "MediaObject",
            _name: "MediaObject",
            _parent: [
                "CreativeWork"
            ],
            associatedArticle: [
                "NewsArticle"
            ],
            bitrate: [
                "Text"
            ],
            contentSize: [
                "Text"
            ],
            contentUrl: [
                "URL"
            ],
            duration: [
                "Duration"
            ],
            embedUrl: [
                "URL"
            ],
            encodesCreativeWork: [
                "CreativeWork"
            ],
            encodingFormat: [
                "Text",
                "URL"
            ],
            endTime: [
                "Time",
                "DateTime"
            ],
            height: [
                "QuantitativeValue",
                "Distance"
            ],
            playerType: [
                "Text"
            ],
            productionCompany: [
                "Organization"
            ],
            regionsAllowed: [
                "Place"
            ],
            requiresSubscription: [
                "MediaSubscription",
                "Boolean"
            ],
            startTime: [
                "DateTime",
                "Time"
            ],
            uploadDate: [
                "Date"
            ],
            width: [
                "Distance",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "movieseries",
        {
            _id: "MovieSeries",
            _name: "MovieSeries",
            _parent: [
                "CreativeWorkSeries"
            ],
            actor: [
                "Person"
            ],
            director: [
                "Person"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            productionCompany: [
                "Organization"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "postaladdress",
        {
            _id: "PostalAddress",
            _name: "PostalAddress",
            _parent: [
                "ContactPoint"
            ],
            addressCountry: [
                "Country",
                "Text"
            ],
            addressLocality: [
                "Text"
            ],
            addressRegion: [
                "Text"
            ],
            postalCode: [
                "Text"
            ],
            postOfficeBoxNumber: [
                "Text"
            ],
            streetAddress: [
                "Text"
            ]
        }
    ],
    [
        "contactpoint",
        {
            _id: "ContactPoint",
            _name: "ContactPoint",
            _parent: [
                "StructuredValue"
            ],
            areaServed: [
                "Text",
                "GeoShape",
                "AdministrativeArea",
                "Place"
            ],
            availableLanguage: [
                "Text",
                "Language"
            ],
            contactOption: [
                "ContactPointOption"
            ],
            contactType: [
                "Text"
            ],
            email: [
                "Text"
            ],
            faxNumber: [
                "Text"
            ],
            hoursAvailable: [
                "OpeningHoursSpecification"
            ],
            productSupported: [
                "Product",
                "Text"
            ],
            telephone: [
                "Text"
            ]
        }
    ],
    [
        "sportsteam",
        {
            _id: "SportsTeam",
            _name: "SportsTeam",
            _parent: [
                "SportsOrganization"
            ],
            athlete: [
                "Person"
            ],
            coach: [
                "Person"
            ]
        }
    ],
    [
        "sportsorganization",
        {
            _id: "SportsOrganization",
            _name: "SportsOrganization",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "quantitativevalue",
        {
            _id: "QuantitativeValue",
            _name: "QuantitativeValue",
            _parent: [
                "StructuredValue"
            ],
            additionalProperty: [
                "PropertyValue"
            ],
            maxValue: [
                "Number"
            ],
            minValue: [
                "Number"
            ],
            unitCode: [
                "Text",
                "URL"
            ],
            unitText: [
                "Text"
            ],
            value: [
                "StructuredValue",
                "Boolean",
                "Text",
                "Number"
            ],
            valueReference: [
                "QualitativeValue",
                "QuantitativeValue",
                "Enumeration",
                "StructuredValue",
                "PropertyValue"
            ]
        }
    ],
    [
        "visualartwork",
        {
            _id: "VisualArtwork",
            _name: "VisualArtwork",
            _parent: [
                "CreativeWork"
            ],
            artEdition: [
                "Text",
                "Integer"
            ],
            artform: [
                "URL",
                "Text"
            ],
            artist: [
                "Person"
            ],
            artMedium: [
                "URL",
                "Text"
            ],
            artworkSurface: [
                "URL",
                "Text"
            ],
            colorist: [
                "Person"
            ],
            depth: [
                "Distance",
                "QuantitativeValue"
            ],
            height: [
                "QuantitativeValue",
                "Distance"
            ],
            inker: [
                "Person"
            ],
            letterer: [
                "Person"
            ],
            penciler: [
                "Person"
            ],
            width: [
                "Distance",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "comicissue",
        {
            _id: "ComicIssue",
            _name: "ComicIssue",
            _parent: [
                "PublicationIssue"
            ],
            artist: [
                "Person"
            ],
            colorist: [
                "Person"
            ],
            inker: [
                "Person"
            ],
            letterer: [
                "Person"
            ],
            penciler: [
                "Person"
            ],
            variantCover: [
                "Text"
            ]
        }
    ],
    [
        "publicationissue",
        {
            _id: "PublicationIssue",
            _name: "PublicationIssue",
            _parent: [
                "CreativeWork"
            ],
            issueNumber: [
                "Integer",
                "Text"
            ],
            pageEnd: [
                "Integer",
                "Text"
            ],
            pageStart: [
                "Text",
                "Integer"
            ],
            pagination: [
                "Text"
            ]
        }
    ],
    [
        "comicstory",
        {
            _id: "ComicStory",
            _name: "ComicStory",
            _parent: [
                "CreativeWork"
            ],
            artist: [
                "Person"
            ],
            colorist: [
                "Person"
            ],
            inker: [
                "Person"
            ],
            letterer: [
                "Person"
            ],
            penciler: [
                "Person"
            ]
        }
    ],
    [
        "locationfeaturespecification",
        {
            _id: "LocationFeatureSpecification",
            _name: "LocationFeatureSpecification",
            _parent: [
                "PropertyValue"
            ],
            hoursAvailable: [
                "OpeningHoursSpecification"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ]
        }
    ],
    [
        "propertyvalue",
        {
            _id: "PropertyValue",
            _name: "PropertyValue",
            _parent: [
                "StructuredValue"
            ],
            maxValue: [
                "Number"
            ],
            minValue: [
                "Number"
            ],
            propertyID: [
                "URL",
                "Text"
            ],
            unitCode: [
                "Text",
                "URL"
            ],
            unitText: [
                "Text"
            ],
            value: [
                "StructuredValue",
                "Boolean",
                "Text",
                "Number"
            ],
            valueReference: [
                "QualitativeValue",
                "QuantitativeValue",
                "Enumeration",
                "StructuredValue",
                "PropertyValue"
            ]
        }
    ],
    [
        "openinghoursspecification",
        {
            _id: "OpeningHoursSpecification",
            _name: "OpeningHoursSpecification",
            _parent: [
                "StructuredValue"
            ],
            closes: [
                "Time"
            ],
            dayOfWeek: [
                "DayOfWeek"
            ],
            opens: [
                "Time"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ]
        }
    ],
    [
        "broadcastevent",
        {
            _id: "BroadcastEvent",
            _name: "BroadcastEvent",
            _parent: [
                "PublicationEvent"
            ],
            broadcastOfEvent: [
                "Event"
            ],
            isLiveBroadcast: [
                "Boolean"
            ],
            videoFormat: [
                "Text"
            ]
        }
    ],
    [
        "publicationevent",
        {
            _id: "PublicationEvent",
            _name: "PublicationEvent",
            _parent: [
                "Event"
            ],
            publishedBy: [
                "Person",
                "Organization"
            ],
            publishedOn: [
                "BroadcastService"
            ]
        }
    ],
    [
        "quantitativevaluedistribution",
        {
            _id: "QuantitativeValueDistribution",
            _name: "QuantitativeValueDistribution",
            _parent: [
                "StructuredValue"
            ],
            duration: [
                "Duration"
            ],
            median: [
                "Number"
            ],
            percentile10: [
                "Number"
            ],
            percentile25: [
                "Number"
            ],
            percentile75: [
                "Number"
            ],
            percentile90: [
                "Number"
            ]
        }
    ],
    [
        "flightreservation",
        {
            _id: "FlightReservation",
            _name: "FlightReservation",
            _parent: [
                "Reservation"
            ],
            boardingGroup: [
                "Text"
            ],
            passengerPriorityStatus: [
                "QualitativeValue",
                "Text"
            ],
            passengerSequenceNumber: [
                "Text"
            ],
            securityScreening: [
                "Text"
            ]
        }
    ],
    [
        "traintrip",
        {
            _id: "TrainTrip",
            _name: "TrainTrip",
            _parent: [
                "Trip"
            ],
            arrivalPlatform: [
                "Text"
            ],
            arrivalStation: [
                "TrainStation"
            ],
            departurePlatform: [
                "Text"
            ],
            departureStation: [
                "TrainStation"
            ],
            trainName: [
                "Text"
            ],
            trainNumber: [
                "Text"
            ]
        }
    ],
    [
        "consumeaction",
        {
            _id: "ConsumeAction",
            _name: "ConsumeAction",
            _parent: [
                "Action"
            ],
            actionAccessibilityRequirement: [
                "ActionAccessSpecification"
            ],
            expectsAcceptanceOf: [
                "Offer"
            ]
        }
    ],
    [
        "actionaccessspecification",
        {
            _id: "ActionAccessSpecification",
            _name: "ActionAccessSpecification",
            _parent: [
                "Intangible"
            ],
            availabilityEnds: [
                "Date",
                "DateTime",
                "Time"
            ],
            availabilityStarts: [
                "Time",
                "Date",
                "DateTime"
            ],
            category: [
                "URL",
                "Text",
                "Thing",
                "PhysicalActivityCategory"
            ],
            eligibleRegion: [
                "GeoShape",
                "Place",
                "Text"
            ],
            expectsAcceptanceOf: [
                "Offer"
            ],
            requiresSubscription: [
                "MediaSubscription",
                "Boolean"
            ]
        }
    ],
    [
        "broadcastfrequencyspecification",
        {
            _id: "BroadcastFrequencySpecification",
            _name: "BroadcastFrequencySpecification",
            _parent: [
                "Intangible"
            ],
            broadcastFrequencyValue: [
                "Number",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "webpage",
        {
            _id: "WebPage",
            _name: "WebPage",
            _parent: [
                "CreativeWork"
            ],
            breadcrumb: [
                "BreadcrumbList",
                "Text"
            ],
            lastReviewed: [
                "Date"
            ],
            mainContentOfPage: [
                "WebPageElement"
            ],
            primaryImageOfPage: [
                "ImageObject"
            ],
            relatedLink: [
                "URL"
            ],
            reviewedBy: [
                "Organization",
                "Person"
            ],
            significantLink: [
                "URL"
            ],
            speakable: [
                "SpeakableSpecification",
                "URL"
            ],
            specialty: [
                "Specialty"
            ]
        }
    ],
    [
        "movie",
        {
            _id: "Movie",
            _name: "Movie",
            _parent: [
                "CreativeWork"
            ],
            actor: [
                "Person"
            ],
            countryOfOrigin: [
                "Country"
            ],
            director: [
                "Person"
            ],
            duration: [
                "Duration"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            productionCompany: [
                "Organization"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "website",
        {
            _id: "WebSite",
            _name: "WebSite",
            _parent: [
                "CreativeWork"
            ],
            issn: [
                "Text"
            ]
        }
    ],
    [
        "autorental",
        {
            _id: "AutoRental",
            _name: "AutoRental",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "automotivebusiness",
        {
            _id: "AutomotiveBusiness",
            _name: "AutomotiveBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalbusiness",
        {
            _id: "MedicalBusiness",
            _name: "MedicalBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "productmodel",
        {
            _id: "ProductModel",
            _name: "ProductModel",
            _parent: [
                "Product"
            ],
            isVariantOf: [
                "ProductModel"
            ],
            predecessorOf: [
                "ProductModel"
            ],
            successorOf: [
                "ProductModel"
            ]
        }
    ],
    [
        "nerve",
        {
            _id: "Nerve",
            _name: "Nerve",
            _parent: [
                "AnatomicalStructure"
            ],
            nerveMotor: [
                "Muscle"
            ],
            sensoryUnit: [
                "AnatomicalStructure",
                "SuperficialAnatomy"
            ],
            sourcedFrom: [
                "BrainStructure"
            ]
        }
    ],
    [
        "anatomicalstructure",
        {
            _id: "AnatomicalStructure",
            _name: "AnatomicalStructure",
            _parent: [
                "MedicalEntity"
            ],
            associatedPathophysiology: [
                "Text"
            ],
            bodyLocation: [
                "Text"
            ],
            connectedTo: [
                "AnatomicalStructure"
            ],
            diagram: [
                "ImageObject"
            ],
            partOfSystem: [
                "AnatomicalSystem"
            ],
            relatedCondition: [
                "MedicalCondition"
            ],
            relatedTherapy: [
                "MedicalTherapy"
            ],
            subStructure: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "brainstructure",
        {
            _id: "BrainStructure",
            _name: "BrainStructure",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "lymphaticvessel",
        {
            _id: "LymphaticVessel",
            _name: "LymphaticVessel",
            _parent: [
                "Vessel"
            ],
            originatesFrom: [
                "Vessel"
            ],
            regionDrained: [
                "AnatomicalStructure",
                "AnatomicalSystem"
            ],
            runsTo: [
                "Vessel"
            ]
        }
    ],
    [
        "vessel",
        {
            _id: "Vessel",
            _name: "Vessel",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "treatmentindication",
        {
            _id: "TreatmentIndication",
            _name: "TreatmentIndication",
            _parent: [
                "MedicalIndication"
            ]
        }
    ],
    [
        "medicalindication",
        {
            _id: "MedicalIndication",
            _name: "MedicalIndication",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "programmembership",
        {
            _id: "ProgramMembership",
            _name: "ProgramMembership",
            _parent: [
                "Intangible"
            ],
            hostingOrganization: [
                "Organization"
            ],
            member: [
                "Person",
                "Organization"
            ],
            membershipNumber: [
                "Text"
            ],
            programName: [
                "Text"
            ]
        }
    ],
    [
        "restaurant",
        {
            _id: "Restaurant",
            _name: "Restaurant",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "foodestablishment",
        {
            _id: "FoodEstablishment",
            _name: "FoodEstablishment",
            _parent: [
                "LocalBusiness"
            ],
            acceptsReservations: [
                "URL",
                "Boolean",
                "Text"
            ],
            hasMenu: [
                "Menu",
                "Text",
                "URL"
            ],
            servesCuisine: [
                "Text"
            ],
            starRating: [
                "Rating"
            ]
        }
    ],
    [
        "organizeaction",
        {
            _id: "OrganizeAction",
            _name: "OrganizeAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "apartmentcomplex",
        {
            _id: "ApartmentComplex",
            _name: "ApartmentComplex",
            _parent: [
                "Residence"
            ],
            petsAllowed: [
                "Text",
                "Boolean"
            ]
        }
    ],
    [
        "residence",
        {
            _id: "Residence",
            _name: "Residence",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "softwareapplication",
        {
            _id: "SoftwareApplication",
            _name: "SoftwareApplication",
            _parent: [
                "CreativeWork"
            ],
            applicationCategory: [
                "URL",
                "Text"
            ],
            applicationSubCategory: [
                "URL",
                "Text"
            ],
            applicationSuite: [
                "Text"
            ],
            availableOnDevice: [
                "Text"
            ],
            countriesNotSupported: [
                "Text"
            ],
            countriesSupported: [
                "Text"
            ],
            downloadUrl: [
                "URL"
            ],
            featureList: [
                "URL",
                "Text"
            ],
            fileSize: [
                "Text"
            ],
            installUrl: [
                "URL"
            ],
            memoryRequirements: [
                "URL",
                "Text"
            ],
            operatingSystem: [
                "Text"
            ],
            permissions: [
                "Text"
            ],
            processorRequirements: [
                "Text"
            ],
            releaseNotes: [
                "Text",
                "URL"
            ],
            screenshot: [
                "ImageObject",
                "URL"
            ],
            softwareAddOn: [
                "SoftwareApplication"
            ],
            softwareHelp: [
                "CreativeWork"
            ],
            softwareRequirements: [
                "URL",
                "Text"
            ],
            softwareVersion: [
                "Text"
            ],
            storageRequirements: [
                "URL",
                "Text"
            ],
            supportingData: [
                "DataFeed"
            ]
        }
    ],
    [
        "message",
        {
            _id: "Message",
            _name: "Message",
            _parent: [
                "CreativeWork"
            ],
            bccRecipient: [
                "Person",
                "ContactPoint",
                "Organization"
            ],
            ccRecipient: [
                "Person",
                "Organization",
                "ContactPoint"
            ],
            dateRead: [
                "Date",
                "DateTime"
            ],
            dateReceived: [
                "DateTime"
            ],
            dateSent: [
                "DateTime"
            ],
            messageAttachment: [
                "CreativeWork"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ],
            sender: [
                "Organization",
                "Person",
                "Audience"
            ],
            toRecipient: [
                "ContactPoint",
                "Audience",
                "Organization",
                "Person"
            ]
        }
    ],
    [
        "communicateaction",
        {
            _id: "CommunicateAction",
            _name: "CommunicateAction",
            _parent: [
                "InteractAction"
            ],
            about: [
                "Thing"
            ],
            inLanguage: [
                "Language",
                "Text"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "interactaction",
        {
            _id: "InteractAction",
            _name: "InteractAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "payaction",
        {
            _id: "PayAction",
            _name: "PayAction",
            _parent: [
                "TradeAction"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "tradeaction",
        {
            _id: "TradeAction",
            _name: "TradeAction",
            _parent: [
                "Action"
            ],
            price: [
                "Number",
                "Text"
            ],
            priceCurrency: [
                "Text"
            ],
            priceSpecification: [
                "PriceSpecification"
            ]
        }
    ],
    [
        "donateaction",
        {
            _id: "DonateAction",
            _name: "DonateAction",
            _parent: [
                "TradeAction"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "sendaction",
        {
            _id: "SendAction",
            _name: "SendAction",
            _parent: [
                "TransferAction"
            ],
            deliveryMethod: [
                "DeliveryMethod"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "transferaction",
        {
            _id: "TransferAction",
            _name: "TransferAction",
            _parent: [
                "Action"
            ],
            fromLocation: [
                "Place"
            ],
            toLocation: [
                "Place"
            ]
        }
    ],
    [
        "authorizeaction",
        {
            _id: "AuthorizeAction",
            _name: "AuthorizeAction",
            _parent: [
                "AllocateAction"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "allocateaction",
        {
            _id: "AllocateAction",
            _name: "AllocateAction",
            _parent: [
                "OrganizeAction"
            ]
        }
    ],
    [
        "giveaction",
        {
            _id: "GiveAction",
            _name: "GiveAction",
            _parent: [
                "TransferAction"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "tipaction",
        {
            _id: "TipAction",
            _name: "TipAction",
            _parent: [
                "TradeAction"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "returnaction",
        {
            _id: "ReturnAction",
            _name: "ReturnAction",
            _parent: [
                "TransferAction"
            ],
            recipient: [
                "Audience",
                "Person",
                "ContactPoint",
                "Organization"
            ]
        }
    ],
    [
        "jobposting",
        {
            _id: "JobPosting",
            _name: "JobPosting",
            _parent: [
                "Intangible"
            ],
            baseSalary: [
                "PriceSpecification",
                "MonetaryAmount",
                "Number"
            ],
            datePosted: [
                "DateTime",
                "Date"
            ],
            employmentType: [
                "Text"
            ],
            estimatedSalary: [
                "MonetaryAmount",
                "MonetaryAmountDistribution",
                "Number"
            ],
            experienceRequirements: [
                "Text"
            ],
            hiringOrganization: [
                "Organization"
            ],
            incentiveCompensation: [
                "Text"
            ],
            industry: [
                "Text"
            ],
            jobBenefits: [
                "Text"
            ],
            jobLocation: [
                "Place"
            ],
            relevantOccupation: [
                "Occupation"
            ],
            responsibilities: [
                "Text"
            ],
            salaryCurrency: [
                "Text"
            ],
            skills: [
                "Text"
            ],
            specialCommitments: [
                "Text"
            ],
            title: [
                "Text"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ],
            workHours: [
                "Text"
            ]
        }
    ],
    [
        "enginespecification",
        {
            _id: "EngineSpecification",
            _name: "EngineSpecification",
            _parent: [
                "StructuredValue"
            ],
            engineDisplacement: [
                "QuantitativeValue"
            ],
            enginePower: [
                "QuantitativeValue"
            ],
            engineType: [
                "Text",
                "URL",
                "QualitativeValue"
            ],
            fuelType: [
                "URL",
                "Text",
                "QualitativeValue"
            ],
            torque: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "offer",
        {
            _id: "Offer",
            _name: "Offer",
            _parent: [
                "Intangible"
            ],
            acceptedPaymentMethod: [
                "LoanOrCredit",
                "PaymentMethod"
            ],
            addOn: [
                "Offer"
            ],
            advanceBookingRequirement: [
                "QuantitativeValue"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            areaServed: [
                "Text",
                "GeoShape",
                "AdministrativeArea",
                "Place"
            ],
            availability: [
                "ItemAvailability"
            ],
            availabilityEnds: [
                "Date",
                "DateTime",
                "Time"
            ],
            availabilityStarts: [
                "Time",
                "Date",
                "DateTime"
            ],
            availableAtOrFrom: [
                "Place"
            ],
            availableDeliveryMethod: [
                "DeliveryMethod"
            ],
            businessFunction: [
                "BusinessFunction"
            ],
            category: [
                "URL",
                "Text",
                "Thing",
                "PhysicalActivityCategory"
            ],
            deliveryLeadTime: [
                "QuantitativeValue"
            ],
            eligibleCustomerType: [
                "BusinessEntityType"
            ],
            eligibleDuration: [
                "QuantitativeValue"
            ],
            eligibleQuantity: [
                "QuantitativeValue"
            ],
            eligibleRegion: [
                "GeoShape",
                "Place",
                "Text"
            ],
            eligibleTransactionVolume: [
                "PriceSpecification"
            ],
            gtin12: [
                "Text"
            ],
            gtin13: [
                "Text"
            ],
            gtin14: [
                "Text"
            ],
            gtin8: [
                "Text"
            ],
            includesObject: [
                "TypeAndQuantityNode"
            ],
            inventoryLevel: [
                "QuantitativeValue"
            ],
            itemCondition: [
                "OfferItemCondition"
            ],
            itemOffered: [
                "CreativeWork",
                "MenuItem",
                "Service",
                "Trip",
                "AggregateOffer",
                "Event",
                "Product"
            ],
            mpn: [
                "Text"
            ],
            offeredBy: [
                "Person",
                "Organization"
            ],
            price: [
                "Number",
                "Text"
            ],
            priceCurrency: [
                "Text"
            ],
            priceSpecification: [
                "PriceSpecification"
            ],
            priceValidUntil: [
                "Date"
            ],
            review: [
                "Review"
            ],
            seller: [
                "Person",
                "Organization"
            ],
            serialNumber: [
                "Text"
            ],
            sku: [
                "Text"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ],
            warranty: [
                "WarrantyPromise"
            ]
        }
    ],
    [
        "demand",
        {
            _id: "Demand",
            _name: "Demand",
            _parent: [
                "Intangible"
            ],
            acceptedPaymentMethod: [
                "LoanOrCredit",
                "PaymentMethod"
            ],
            advanceBookingRequirement: [
                "QuantitativeValue"
            ],
            areaServed: [
                "Text",
                "GeoShape",
                "AdministrativeArea",
                "Place"
            ],
            availability: [
                "ItemAvailability"
            ],
            availabilityEnds: [
                "Date",
                "DateTime",
                "Time"
            ],
            availabilityStarts: [
                "Time",
                "Date",
                "DateTime"
            ],
            availableAtOrFrom: [
                "Place"
            ],
            availableDeliveryMethod: [
                "DeliveryMethod"
            ],
            businessFunction: [
                "BusinessFunction"
            ],
            deliveryLeadTime: [
                "QuantitativeValue"
            ],
            eligibleCustomerType: [
                "BusinessEntityType"
            ],
            eligibleDuration: [
                "QuantitativeValue"
            ],
            eligibleQuantity: [
                "QuantitativeValue"
            ],
            eligibleRegion: [
                "GeoShape",
                "Place",
                "Text"
            ],
            eligibleTransactionVolume: [
                "PriceSpecification"
            ],
            gtin12: [
                "Text"
            ],
            gtin13: [
                "Text"
            ],
            gtin14: [
                "Text"
            ],
            gtin8: [
                "Text"
            ],
            includesObject: [
                "TypeAndQuantityNode"
            ],
            inventoryLevel: [
                "QuantitativeValue"
            ],
            itemCondition: [
                "OfferItemCondition"
            ],
            itemOffered: [
                "CreativeWork",
                "MenuItem",
                "Service",
                "Trip",
                "AggregateOffer",
                "Event",
                "Product"
            ],
            mpn: [
                "Text"
            ],
            priceSpecification: [
                "PriceSpecification"
            ],
            seller: [
                "Person",
                "Organization"
            ],
            serialNumber: [
                "Text"
            ],
            sku: [
                "Text"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validThrough: [
                "Date",
                "DateTime"
            ],
            warranty: [
                "WarrantyPromise"
            ]
        }
    ],
    [
        "useaction",
        {
            _id: "UseAction",
            _name: "UseAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "apireference",
        {
            _id: "APIReference",
            _name: "APIReference",
            _parent: [
                "TechArticle"
            ],
            assemblyVersion: [
                "Text"
            ],
            executableLibraryName: [
                "Text"
            ],
            programmingModel: [
                "Text"
            ],
            targetPlatform: [
                "Text"
            ]
        }
    ],
    [
        "techarticle",
        {
            _id: "TechArticle",
            _name: "TechArticle",
            _parent: [
                "Article"
            ],
            dependencies: [
                "Text"
            ],
            proficiencyLevel: [
                "Text"
            ]
        }
    ],
    [
        "filmaction",
        {
            _id: "FilmAction",
            _name: "FilmAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "createaction",
        {
            _id: "CreateAction",
            _name: "CreateAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "bustrip",
        {
            _id: "BusTrip",
            _name: "BusTrip",
            _parent: [
                "Trip"
            ],
            arrivalBusStop: [
                "BusStop",
                "BusStation"
            ],
            busName: [
                "Text"
            ],
            busNumber: [
                "Text"
            ],
            departureBusStop: [
                "BusStop",
                "BusStation"
            ]
        }
    ],
    [
        "busstop",
        {
            _id: "BusStop",
            _name: "BusStop",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "busstation",
        {
            _id: "BusStation",
            _name: "BusStation",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "computerlanguage",
        {
            _id: "ComputerLanguage",
            _name: "ComputerLanguage",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "room",
        {
            _id: "Room",
            _name: "Room",
            _parent: [
                "Accommodation"
            ]
        }
    ],
    [
        "accommodation",
        {
            _id: "Accommodation",
            _name: "Accommodation",
            _parent: [
                "Place"
            ],
            amenityFeature: [
                "LocationFeatureSpecification"
            ],
            floorSize: [
                "QuantitativeValue"
            ],
            numberOfRooms: [
                "Number",
                "QuantitativeValue"
            ],
            permittedUsage: [
                "Text"
            ],
            petsAllowed: [
                "Text",
                "Boolean"
            ]
        }
    ],
    [
        "medicalscholarlyarticle",
        {
            _id: "MedicalScholarlyArticle",
            _name: "MedicalScholarlyArticle",
            _parent: [
                "ScholarlyArticle"
            ],
            publicationType: [
                "Text"
            ]
        }
    ],
    [
        "scholarlyarticle",
        {
            _id: "ScholarlyArticle",
            _name: "ScholarlyArticle",
            _parent: [
                "Article"
            ]
        }
    ],
    [
        "educationevent",
        {
            _id: "EducationEvent",
            _name: "EducationEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "speakablespecification",
        {
            _id: "SpeakableSpecification",
            _name: "SpeakableSpecification",
            _parent: [
                "Intangible"
            ],
            cssSelector: [
                "CssSelectorType"
            ],
            xpath: [
                "XPathType"
            ]
        }
    ],
    [
        "sportinggoodsstore",
        {
            _id: "SportingGoodsStore",
            _name: "SportingGoodsStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "individualproduct",
        {
            _id: "IndividualProduct",
            _name: "IndividualProduct",
            _parent: [
                "Product"
            ],
            serialNumber: [
                "Text"
            ]
        }
    ],
    [
        "videogame",
        {
            _id: "VideoGame",
            _name: "VideoGame",
            _parent: [
                "SoftwareApplication",
                "Game"
            ],
            actor: [
                "Person"
            ],
            cheatCode: [
                "CreativeWork"
            ],
            director: [
                "Person"
            ],
            gamePlatform: [
                "Text",
                "URL",
                "Thing"
            ],
            gameServer: [
                "GameServer"
            ],
            gameTip: [
                "CreativeWork"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            playMode: [
                "GamePlayMode"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "game",
        {
            _id: "Game",
            _name: "Game",
            _parent: [
                "CreativeWork"
            ],
            characterAttribute: [
                "Thing"
            ],
            gameItem: [
                "Thing"
            ],
            gameLocation: [
                "Place",
                "PostalAddress",
                "URL"
            ],
            numberOfPlayers: [
                "QuantitativeValue"
            ],
            quest: [
                "Thing"
            ]
        }
    ],
    [
        "medicaltestpanel",
        {
            _id: "MedicalTestPanel",
            _name: "MedicalTestPanel",
            _parent: [
                "MedicalTest"
            ],
            subTest: [
                "MedicalTest"
            ]
        }
    ],
    [
        "warrantypromise",
        {
            _id: "WarrantyPromise",
            _name: "WarrantyPromise",
            _parent: [
                "StructuredValue"
            ],
            durationOfWarranty: [
                "QuantitativeValue"
            ],
            warrantyScope: [
                "WarrantyScope"
            ]
        }
    ],
    [
        "taxireservation",
        {
            _id: "TaxiReservation",
            _name: "TaxiReservation",
            _parent: [
                "Reservation"
            ],
            partySize: [
                "Integer",
                "QuantitativeValue"
            ],
            pickupLocation: [
                "Place"
            ],
            pickupTime: [
                "DateTime"
            ]
        }
    ],
    [
        "question",
        {
            _id: "Question",
            _name: "Question",
            _parent: [
                "Comment"
            ],
            acceptedAnswer: [
                "Answer",
                "ItemList"
            ],
            answerCount: [
                "Integer"
            ],
            suggestedAnswer: [
                "Answer",
                "ItemList"
            ]
        }
    ],
    [
        "comment",
        {
            _id: "Comment",
            _name: "Comment",
            _parent: [
                "CreativeWork"
            ],
            downvoteCount: [
                "Integer"
            ],
            parentItem: [
                "Comment"
            ],
            upvoteCount: [
                "Integer"
            ]
        }
    ],
    [
        "answer",
        {
            _id: "Answer",
            _name: "Answer",
            _parent: [
                "Comment"
            ]
        }
    ],
    [
        "itemlist",
        {
            _id: "ItemList",
            _name: "ItemList",
            _parent: [
                "Intangible"
            ],
            itemListElement: [
                "Text",
                "Thing",
                "ListItem"
            ],
            itemListOrder: [
                "ItemListOrderType",
                "Text"
            ],
            numberOfItems: [
                "Integer"
            ]
        }
    ],
    [
        "employeerole",
        {
            _id: "EmployeeRole",
            _name: "EmployeeRole",
            _parent: [
                "OrganizationRole"
            ],
            baseSalary: [
                "PriceSpecification",
                "MonetaryAmount",
                "Number"
            ],
            salaryCurrency: [
                "Text"
            ]
        }
    ],
    [
        "organizationrole",
        {
            _id: "OrganizationRole",
            _name: "OrganizationRole",
            _parent: [
                "Role"
            ],
            numberedPosition: [
                "Number"
            ]
        }
    ],
    [
        "role",
        {
            _id: "Role",
            _name: "Role",
            _parent: [
                "Intangible"
            ],
            endDate: [
                "Date",
                "DateTime"
            ],
            roleName: [
                "Text",
                "URL"
            ],
            startDate: [
                "Date",
                "DateTime"
            ]
        }
    ],
    [
        "someproducts",
        {
            _id: "SomeProducts",
            _name: "SomeProducts",
            _parent: [
                "Product"
            ],
            inventoryLevel: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "planaction",
        {
            _id: "PlanAction",
            _name: "PlanAction",
            _parent: [
                "OrganizeAction"
            ],
            scheduledTime: [
                "DateTime"
            ]
        }
    ],
    [
        "waterfall",
        {
            _id: "Waterfall",
            _name: "Waterfall",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "bodyofwater",
        {
            _id: "BodyOfWater",
            _name: "BodyOfWater",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "landform",
        {
            _id: "Landform",
            _name: "Landform",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "review",
        {
            _id: "Review",
            _name: "Review",
            _parent: [
                "CreativeWork"
            ],
            itemReviewed: [
                "Thing"
            ],
            reviewAspect: [
                "Text"
            ],
            reviewBody: [
                "Text"
            ],
            reviewRating: [
                "Rating"
            ]
        }
    ],
    [
        "aggregaterating",
        {
            _id: "AggregateRating",
            _name: "AggregateRating",
            _parent: [
                "Rating"
            ],
            itemReviewed: [
                "Thing"
            ],
            ratingCount: [
                "Integer"
            ],
            reviewCount: [
                "Integer"
            ]
        }
    ],
    [
        "rating",
        {
            _id: "Rating",
            _name: "Rating",
            _parent: [
                "Intangible"
            ],
            author: [
                "Organization",
                "Person"
            ],
            bestRating: [
                "Text",
                "Number"
            ],
            ratingValue: [
                "Text",
                "Number"
            ],
            reviewAspect: [
                "Text"
            ],
            worstRating: [
                "Number",
                "Text"
            ]
        }
    ],
    [
        "autowash",
        {
            _id: "AutoWash",
            _name: "AutoWash",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "officeequipmentstore",
        {
            _id: "OfficeEquipmentStore",
            _name: "OfficeEquipmentStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "gatedresidencecommunity",
        {
            _id: "GatedResidenceCommunity",
            _name: "GatedResidenceCommunity",
            _parent: [
                "Residence"
            ]
        }
    ],
    [
        "bakery",
        {
            _id: "Bakery",
            _name: "Bakery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "medicalconditionstage",
        {
            _id: "MedicalConditionStage",
            _name: "MedicalConditionStage",
            _parent: [
                "MedicalIntangible"
            ],
            stageAsNumber: [
                "Number"
            ],
            subStageSuffix: [
                "Text"
            ]
        }
    ],
    [
        "medicalintangible",
        {
            _id: "MedicalIntangible",
            _name: "MedicalIntangible",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "country",
        {
            _id: "Country",
            _name: "Country",
            _parent: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "administrativearea",
        {
            _id: "AdministrativeArea",
            _name: "AdministrativeArea",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "movietheater",
        {
            _id: "MovieTheater",
            _name: "MovieTheater",
            _parent: [
                "EntertainmentBusiness",
                "CivicStructure"
            ],
            screenCount: [
                "Number"
            ]
        }
    ],
    [
        "entertainmentbusiness",
        {
            _id: "EntertainmentBusiness",
            _name: "EntertainmentBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "sellaction",
        {
            _id: "SellAction",
            _name: "SellAction",
            _parent: [
                "TradeAction"
            ],
            buyer: [
                "Person"
            ]
        }
    ],
    [
        "menuitem",
        {
            _id: "MenuItem",
            _name: "MenuItem",
            _parent: [
                "Intangible"
            ],
            menuAddOn: [
                "MenuItem",
                "MenuSection"
            ],
            nutrition: [
                "NutritionInformation"
            ],
            offers: [
                "Demand",
                "Offer"
            ],
            suitableForDiet: [
                "RestrictedDiet"
            ]
        }
    ],
    [
        "menusection",
        {
            _id: "MenuSection",
            _name: "MenuSection",
            _parent: [
                "CreativeWork"
            ],
            hasMenuItem: [
                "MenuItem"
            ],
            hasMenuSection: [
                "MenuSection"
            ]
        }
    ],
    [
        "collectionpage",
        {
            _id: "CollectionPage",
            _name: "CollectionPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "mountain",
        {
            _id: "Mountain",
            _name: "Mountain",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "recipe",
        {
            _id: "Recipe",
            _name: "Recipe",
            _parent: [
                "HowTo"
            ],
            cookingMethod: [
                "Text"
            ],
            cookTime: [
                "Duration"
            ],
            nutrition: [
                "NutritionInformation"
            ],
            recipeCategory: [
                "Text"
            ],
            recipeCuisine: [
                "Text"
            ],
            recipeIngredient: [
                "Text"
            ],
            recipeInstructions: [
                "CreativeWork",
                "Text",
                "ItemList"
            ],
            recipeYield: [
                "QuantitativeValue",
                "Text"
            ],
            suitableForDiet: [
                "RestrictedDiet"
            ]
        }
    ],
    [
        "howto",
        {
            _id: "HowTo",
            _name: "HowTo",
            _parent: [
                "CreativeWork"
            ],
            estimatedCost: [
                "MonetaryAmount",
                "Text"
            ],
            performTime: [
                "Duration"
            ],
            prepTime: [
                "Duration"
            ],
            step: [
                "CreativeWork",
                "HowToStep",
                "HowToSection",
                "Text"
            ],
            supply: [
                "HowToSupply",
                "Text"
            ],
            tool: [
                "HowToTool",
                "Text"
            ],
            totalTime: [
                "Duration"
            ],
            yield: [
                "QuantitativeValue",
                "Text"
            ]
        }
    ],
    [
        "howtodirection",
        {
            _id: "HowToDirection",
            _name: "HowToDirection",
            _parent: [
                "CreativeWork",
                "ListItem"
            ],
            afterMedia: [
                "URL",
                "MediaObject"
            ],
            beforeMedia: [
                "MediaObject",
                "URL"
            ],
            duringMedia: [
                "MediaObject",
                "URL"
            ],
            performTime: [
                "Duration"
            ],
            prepTime: [
                "Duration"
            ],
            supply: [
                "HowToSupply",
                "Text"
            ],
            tool: [
                "HowToTool",
                "Text"
            ],
            totalTime: [
                "Duration"
            ]
        }
    ],
    [
        "listitem",
        {
            _id: "ListItem",
            _name: "ListItem",
            _parent: [
                "Intangible"
            ],
            item: [
                "Thing"
            ],
            nextItem: [
                "ListItem"
            ],
            position: [
                "Text",
                "Integer"
            ],
            previousItem: [
                "ListItem"
            ]
        }
    ],
    [
        "howtosupply",
        {
            _id: "HowToSupply",
            _name: "HowToSupply",
            _parent: [
                "HowToItem"
            ],
            estimatedCost: [
                "MonetaryAmount",
                "Text"
            ]
        }
    ],
    [
        "howtoitem",
        {
            _id: "HowToItem",
            _name: "HowToItem",
            _parent: [
                "ListItem"
            ],
            requiredQuantity: [
                "Number",
                "Text",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "howtotip",
        {
            _id: "HowToTip",
            _name: "HowToTip",
            _parent: [
                "CreativeWork",
                "ListItem"
            ]
        }
    ],
    [
        "medicalriskfactor",
        {
            _id: "MedicalRiskFactor",
            _name: "MedicalRiskFactor",
            _parent: [
                "MedicalEntity"
            ],
            increasesRiskOf: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "performancerole",
        {
            _id: "PerformanceRole",
            _name: "PerformanceRole",
            _parent: [
                "Role"
            ],
            characterName: [
                "Text"
            ]
        }
    ],
    [
        "hospital",
        {
            _id: "Hospital",
            _name: "Hospital",
            _parent: [
                "EmergencyService",
                "CivicStructure",
                "MedicalOrganization"
            ],
            availableService: [
                "MedicalTherapy",
                "MedicalProcedure",
                "MedicalTest"
            ],
            medicalSpecialty: [
                "MedicalSpecialty"
            ]
        }
    ],
    [
        "emergencyservice",
        {
            _id: "EmergencyService",
            _name: "EmergencyService",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalorganization",
        {
            _id: "MedicalOrganization",
            _name: "MedicalOrganization",
            _parent: [
                "Organization"
            ],
            medicalSpecialty: [
                "MedicalSpecialty"
            ]
        }
    ],
    [
        "dataset",
        {
            _id: "Dataset",
            _name: "Dataset",
            _parent: [
                "CreativeWork"
            ],
            distribution: [
                "DataDownload"
            ],
            includedInDataCatalog: [
                "DataCatalog"
            ],
            issn: [
                "Text"
            ]
        }
    ],
    [
        "unitpricespecification",
        {
            _id: "UnitPriceSpecification",
            _name: "UnitPriceSpecification",
            _parent: [
                "PriceSpecification"
            ],
            billingIncrement: [
                "Number"
            ],
            priceType: [
                "Text"
            ],
            referenceQuantity: [
                "QuantitativeValue"
            ],
            unitCode: [
                "Text",
                "URL"
            ],
            unitText: [
                "Text"
            ]
        }
    ],
    [
        "screeningevent",
        {
            _id: "ScreeningEvent",
            _name: "ScreeningEvent",
            _parent: [
                "Event"
            ],
            videoFormat: [
                "Text"
            ],
            workPresented: [
                "Movie"
            ]
        }
    ],
    [
        "language",
        {
            _id: "Language",
            _name: "Language",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "brand",
        {
            _id: "Brand",
            _name: "Brand",
            _parent: [
                "Intangible"
            ],
            aggregateRating: [
                "AggregateRating"
            ],
            logo: [
                "URL",
                "ImageObject"
            ],
            review: [
                "Review"
            ],
            slogan: [
                "Text"
            ]
        }
    ],
    [
        "receiveaction",
        {
            _id: "ReceiveAction",
            _name: "ReceiveAction",
            _parent: [
                "TransferAction"
            ],
            deliveryMethod: [
                "DeliveryMethod"
            ],
            sender: [
                "Organization",
                "Person",
                "Audience"
            ]
        }
    ],
    [
        "videogameclip",
        {
            _id: "VideoGameClip",
            _name: "VideoGameClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "musicrecording",
        {
            _id: "MusicRecording",
            _name: "MusicRecording",
            _parent: [
                "CreativeWork"
            ],
            byArtist: [
                "MusicGroup",
                "Person"
            ],
            duration: [
                "Duration"
            ],
            inAlbum: [
                "MusicAlbum"
            ],
            inPlaylist: [
                "MusicPlaylist"
            ],
            isrcCode: [
                "Text"
            ],
            recordingOf: [
                "MusicComposition"
            ]
        }
    ],
    [
        "musicalbum",
        {
            _id: "MusicAlbum",
            _name: "MusicAlbum",
            _parent: [
                "MusicPlaylist"
            ],
            albumProductionType: [
                "MusicAlbumProductionType"
            ],
            albumRelease: [
                "MusicRelease"
            ],
            albumReleaseType: [
                "MusicAlbumReleaseType"
            ],
            byArtist: [
                "MusicGroup",
                "Person"
            ]
        }
    ],
    [
        "musicplaylist",
        {
            _id: "MusicPlaylist",
            _name: "MusicPlaylist",
            _parent: [
                "CreativeWork"
            ],
            numTracks: [
                "Integer"
            ],
            track: [
                "ItemList",
                "MusicRecording"
            ]
        }
    ],
    [
        "medicalriskscore",
        {
            _id: "MedicalRiskScore",
            _name: "MedicalRiskScore",
            _parent: [
                "MedicalRiskEstimator"
            ],
            algorithm: [
                "Text"
            ]
        }
    ],
    [
        "medicalriskestimator",
        {
            _id: "MedicalRiskEstimator",
            _name: "MedicalRiskEstimator",
            _parent: [
                "MedicalEntity"
            ],
            estimatesRiskOf: [
                "MedicalEntity"
            ],
            includedRiskFactor: [
                "MedicalRiskFactor"
            ]
        }
    ],
    [
        "imageobject",
        {
            _id: "ImageObject",
            _name: "ImageObject",
            _parent: [
                "MediaObject"
            ],
            caption: [
                "Text",
                "MediaObject"
            ],
            exifData: [
                "PropertyValue",
                "Text"
            ],
            representativeOfPage: [
                "Boolean"
            ],
            thumbnail: [
                "ImageObject"
            ]
        }
    ],
    [
        "musicstore",
        {
            _id: "MusicStore",
            _name: "MusicStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "howtostep",
        {
            _id: "HowToStep",
            _name: "HowToStep",
            _parent: [
                "ItemList",
                "ListItem",
                "CreativeWork"
            ]
        }
    ],
    [
        "howtosection",
        {
            _id: "HowToSection",
            _name: "HowToSection",
            _parent: [
                "CreativeWork",
                "ListItem",
                "ItemList"
            ]
        }
    ],
    [
        "physicaltherapy",
        {
            _id: "PhysicalTherapy",
            _name: "PhysicalTherapy",
            _parent: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "quoteaction",
        {
            _id: "QuoteAction",
            _name: "QuoteAction",
            _parent: [
                "TradeAction"
            ]
        }
    ],
    [
        "datatype",
        {
            _id: "DataType",
            _name: "DataType",
            _parent: [
                "rdfs:Class"
            ]
        }
    ],
    [
        "preorderaction",
        {
            _id: "PreOrderAction",
            _name: "PreOrderAction",
            _parent: [
                "TradeAction"
            ]
        }
    ],
    [
        "blog",
        {
            _id: "Blog",
            _name: "Blog",
            _parent: [
                "CreativeWork"
            ],
            blogPost: [
                "BlogPosting"
            ],
            issn: [
                "Text"
            ]
        }
    ],
    [
        "mediasubscription",
        {
            _id: "MediaSubscription",
            _name: "MediaSubscription",
            _parent: [
                "Intangible"
            ],
            authenticator: [
                "Organization"
            ],
            expectsAcceptanceOf: [
                "Offer"
            ]
        }
    ],
    [
        "presentationdigitaldocument",
        {
            _id: "PresentationDigitalDocument",
            _name: "PresentationDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "digitaldocument",
        {
            _id: "DigitalDocument",
            _name: "DigitalDocument",
            _parent: [
                "CreativeWork"
            ],
            hasDigitalDocumentPermission: [
                "DigitalDocumentPermission"
            ]
        }
    ],
    [
        "contactpage",
        {
            _id: "ContactPage",
            _name: "ContactPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "medicaltrial",
        {
            _id: "MedicalTrial",
            _name: "MedicalTrial",
            _parent: [
                "MedicalStudy"
            ],
            trialDesign: [
                "MedicalTrialDesign"
            ]
        }
    ],
    [
        "webapplication",
        {
            _id: "WebApplication",
            _name: "WebApplication",
            _parent: [
                "SoftwareApplication"
            ],
            browserRequirements: [
                "Text"
            ]
        }
    ],
    [
        "palliativeprocedure",
        {
            _id: "PalliativeProcedure",
            _name: "PalliativeProcedure",
            _parent: [
                "MedicalTherapy",
                "MedicalProcedure"
            ]
        }
    ],
    [
        "exerciseplan",
        {
            _id: "ExercisePlan",
            _name: "ExercisePlan",
            _parent: [
                "PhysicalActivity",
                "CreativeWork"
            ],
            activityDuration: [
                "QuantitativeValue",
                "Duration"
            ],
            activityFrequency: [
                "Text",
                "QuantitativeValue"
            ],
            additionalVariable: [
                "Text"
            ],
            exerciseType: [
                "Text"
            ],
            intensity: [
                "Text",
                "QuantitativeValue"
            ],
            repetitions: [
                "QuantitativeValue",
                "Number"
            ],
            restPeriods: [
                "Text",
                "QuantitativeValue"
            ],
            workload: [
                "QuantitativeValue",
                "Energy"
            ]
        }
    ],
    [
        "physicalactivity",
        {
            _id: "PhysicalActivity",
            _name: "PhysicalActivity",
            _parent: [
                "LifestyleModification"
            ],
            associatedAnatomy: [
                "SuperficialAnatomy",
                "AnatomicalStructure",
                "AnatomicalSystem"
            ],
            category: [
                "URL",
                "Text",
                "Thing",
                "PhysicalActivityCategory"
            ],
            epidemiology: [
                "Text"
            ],
            pathophysiology: [
                "Text"
            ]
        }
    ],
    [
        "lifestylemodification",
        {
            _id: "LifestyleModification",
            _name: "LifestyleModification",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "newsarticle",
        {
            _id: "NewsArticle",
            _name: "NewsArticle",
            _parent: [
                "Article"
            ],
            dateline: [
                "Text"
            ],
            printColumn: [
                "Text"
            ],
            printEdition: [
                "Text"
            ],
            printPage: [
                "Text"
            ],
            printSection: [
                "Text"
            ]
        }
    ],
    [
        "ticket",
        {
            _id: "Ticket",
            _name: "Ticket",
            _parent: [
                "Intangible"
            ],
            dateIssued: [
                "Date",
                "DateTime"
            ],
            issuedBy: [
                "Organization"
            ],
            priceCurrency: [
                "Text"
            ],
            ticketedSeat: [
                "Seat"
            ],
            ticketNumber: [
                "Text"
            ],
            ticketToken: [
                "Text",
                "URL"
            ],
            totalPrice: [
                "Number",
                "PriceSpecification",
                "Text"
            ],
            underName: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "medicalclinic",
        {
            _id: "MedicalClinic",
            _name: "MedicalClinic",
            _parent: [
                "MedicalBusiness",
                "MedicalOrganization"
            ],
            availableService: [
                "MedicalTherapy",
                "MedicalProcedure",
                "MedicalTest"
            ],
            medicalSpecialty: [
                "MedicalSpecialty"
            ]
        }
    ],
    [
        "infectiousdisease",
        {
            _id: "InfectiousDisease",
            _name: "InfectiousDisease",
            _parent: [
                "MedicalCondition"
            ],
            infectiousAgent: [
                "Text"
            ],
            infectiousAgentClass: [
                "InfectiousAgentClass"
            ],
            transmissionMethod: [
                "Text"
            ]
        }
    ],
    [
        "report",
        {
            _id: "Report",
            _name: "Report",
            _parent: [
                "Article"
            ],
            reportNumber: [
                "Text"
            ]
        }
    ],
    [
        "geoshape",
        {
            _id: "GeoShape",
            _name: "GeoShape",
            _parent: [
                "StructuredValue"
            ],
            address: [
                "PostalAddress",
                "Text"
            ],
            addressCountry: [
                "Country",
                "Text"
            ],
            box: [
                "Text"
            ],
            circle: [
                "Text"
            ],
            elevation: [
                "Text",
                "Number"
            ],
            line: [
                "Text"
            ],
            polygon: [
                "Text"
            ],
            postalCode: [
                "Text"
            ]
        }
    ],
    [
        "touristattraction",
        {
            _id: "TouristAttraction",
            _name: "TouristAttraction",
            _parent: [
                "Place"
            ],
            availableLanguage: [
                "Text",
                "Language"
            ],
            touristType: [
                "Text",
                "Audience"
            ]
        }
    ],
    [
        "musicrelease",
        {
            _id: "MusicRelease",
            _name: "MusicRelease",
            _parent: [
                "MusicPlaylist"
            ],
            catalogNumber: [
                "Text"
            ],
            creditedTo: [
                "Person",
                "Organization"
            ],
            duration: [
                "Duration"
            ],
            musicReleaseFormat: [
                "MusicReleaseFormatType"
            ],
            recordLabel: [
                "Organization"
            ],
            releaseOf: [
                "MusicAlbum"
            ]
        }
    ],
    [
        "saleevent",
        {
            _id: "SaleEvent",
            _name: "SaleEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "seat",
        {
            _id: "Seat",
            _name: "Seat",
            _parent: [
                "Intangible"
            ],
            seatingType: [
                "QualitativeValue",
                "Text"
            ],
            seatNumber: [
                "Text"
            ],
            seatRow: [
                "Text"
            ],
            seatSection: [
                "Text"
            ]
        }
    ],
    [
        "bedandbreakfast",
        {
            _id: "BedAndBreakfast",
            _name: "BedAndBreakfast",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "lodgingbusiness",
        {
            _id: "LodgingBusiness",
            _name: "LodgingBusiness",
            _parent: [
                "LocalBusiness"
            ],
            amenityFeature: [
                "LocationFeatureSpecification"
            ],
            audience: [
                "Audience"
            ],
            availableLanguage: [
                "Text",
                "Language"
            ],
            checkinTime: [
                "DateTime",
                "Time"
            ],
            checkoutTime: [
                "Time",
                "DateTime"
            ],
            numberOfRooms: [
                "Number",
                "QuantitativeValue"
            ],
            petsAllowed: [
                "Text",
                "Boolean"
            ],
            starRating: [
                "Rating"
            ]
        }
    ],
    [
        "sculpture",
        {
            _id: "Sculpture",
            _name: "Sculpture",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "computerstore",
        {
            _id: "ComputerStore",
            _name: "ComputerStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "chooseaction",
        {
            _id: "ChooseAction",
            _name: "ChooseAction",
            _parent: [
                "AssessAction"
            ],
            actionOption: [
                "Text",
                "Thing"
            ]
        }
    ],
    [
        "assessaction",
        {
            _id: "AssessAction",
            _name: "AssessAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "radiostation",
        {
            _id: "RadioStation",
            _name: "RadioStation",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "drugstrength",
        {
            _id: "DrugStrength",
            _name: "DrugStrength",
            _parent: [
                "MedicalIntangible"
            ],
            activeIngredient: [
                "Text"
            ],
            availableIn: [
                "AdministrativeArea"
            ],
            maximumIntake: [
                "MaximumDoseSchedule"
            ],
            strengthUnit: [
                "Text"
            ],
            strengthValue: [
                "Number"
            ]
        }
    ],
    [
        "dietarysupplement",
        {
            _id: "DietarySupplement",
            _name: "DietarySupplement",
            _parent: [
                "Substance"
            ],
            activeIngredient: [
                "Text"
            ],
            isProprietary: [
                "Boolean"
            ],
            legalStatus: [
                "DrugLegalStatus",
                "MedicalEnumeration",
                "Text"
            ],
            manufacturer: [
                "Organization"
            ],
            maximumIntake: [
                "MaximumDoseSchedule"
            ],
            mechanismOfAction: [
                "Text"
            ],
            nonProprietaryName: [
                "Text"
            ],
            proprietaryName: [
                "Text"
            ],
            recommendedIntake: [
                "RecommendedDoseSchedule"
            ],
            safetyConsideration: [
                "Text"
            ],
            targetPopulation: [
                "Text"
            ]
        }
    ],
    [
        "distance",
        {
            _id: "Distance",
            _name: "Distance",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "golfcourse",
        {
            _id: "GolfCourse",
            _name: "GolfCourse",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "sportsactivitylocation",
        {
            _id: "SportsActivityLocation",
            _name: "SportsActivityLocation",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "cookaction",
        {
            _id: "CookAction",
            _name: "CookAction",
            _parent: [
                "CreateAction"
            ],
            foodEstablishment: [
                "FoodEstablishment",
                "Place"
            ],
            foodEvent: [
                "FoodEvent"
            ],
            recipe: [
                "Recipe"
            ]
        }
    ],
    [
        "videogameseries",
        {
            _id: "VideoGameSeries",
            _name: "VideoGameSeries",
            _parent: [
                "CreativeWorkSeries"
            ],
            actor: [
                "Person"
            ],
            characterAttribute: [
                "Thing"
            ],
            cheatCode: [
                "CreativeWork"
            ],
            containsSeason: [
                "CreativeWorkSeason"
            ],
            director: [
                "Person"
            ],
            episode: [
                "Episode"
            ],
            gameItem: [
                "Thing"
            ],
            gameLocation: [
                "Place",
                "PostalAddress",
                "URL"
            ],
            gamePlatform: [
                "Text",
                "URL",
                "Thing"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            numberOfEpisodes: [
                "Integer"
            ],
            numberOfPlayers: [
                "QuantitativeValue"
            ],
            numberOfSeasons: [
                "Integer"
            ],
            playMode: [
                "GamePlayMode"
            ],
            productionCompany: [
                "Organization"
            ],
            quest: [
                "Thing"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "videoobject",
        {
            _id: "VideoObject",
            _name: "VideoObject",
            _parent: [
                "MediaObject"
            ],
            actor: [
                "Person"
            ],
            caption: [
                "Text",
                "MediaObject"
            ],
            director: [
                "Person"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            thumbnail: [
                "ImageObject"
            ],
            transcript: [
                "Text"
            ],
            videoFrameSize: [
                "Text"
            ],
            videoQuality: [
                "Text"
            ]
        }
    ],
    [
        "radioseries",
        {
            _id: "RadioSeries",
            _name: "RadioSeries",
            _parent: [
                "CreativeWorkSeries"
            ],
            actor: [
                "Person"
            ],
            containsSeason: [
                "CreativeWorkSeason"
            ],
            director: [
                "Person"
            ],
            episode: [
                "Episode"
            ],
            musicBy: [
                "Person",
                "MusicGroup"
            ],
            numberOfEpisodes: [
                "Integer"
            ],
            numberOfSeasons: [
                "Integer"
            ],
            productionCompany: [
                "Organization"
            ],
            trailer: [
                "VideoObject"
            ]
        }
    ],
    [
        "musicgroup",
        {
            _id: "MusicGroup",
            _name: "MusicGroup",
            _parent: [
                "PerformingGroup"
            ],
            album: [
                "MusicAlbum"
            ],
            genre: [
                "URL",
                "Text"
            ],
            track: [
                "ItemList",
                "MusicRecording"
            ]
        }
    ],
    [
        "performinggroup",
        {
            _id: "PerformingGroup",
            _name: "PerformingGroup",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "followaction",
        {
            _id: "FollowAction",
            _name: "FollowAction",
            _parent: [
                "InteractAction"
            ],
            followee: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "anatomicalsystem",
        {
            _id: "AnatomicalSystem",
            _name: "AnatomicalSystem",
            _parent: [
                "MedicalEntity"
            ],
            associatedPathophysiology: [
                "Text"
            ],
            comprisedOf: [
                "AnatomicalSystem",
                "AnatomicalStructure"
            ],
            relatedCondition: [
                "MedicalCondition"
            ],
            relatedStructure: [
                "AnatomicalStructure"
            ],
            relatedTherapy: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "superficialanatomy",
        {
            _id: "SuperficialAnatomy",
            _name: "SuperficialAnatomy",
            _parent: [
                "MedicalEntity"
            ],
            associatedPathophysiology: [
                "Text"
            ],
            relatedAnatomy: [
                "AnatomicalStructure",
                "AnatomicalSystem"
            ],
            relatedCondition: [
                "MedicalCondition"
            ],
            relatedTherapy: [
                "MedicalTherapy"
            ],
            significance: [
                "Text"
            ]
        }
    ],
    [
        "departaction",
        {
            _id: "DepartAction",
            _name: "DepartAction",
            _parent: [
                "MoveAction"
            ]
        }
    ],
    [
        "moveaction",
        {
            _id: "MoveAction",
            _name: "MoveAction",
            _parent: [
                "Action"
            ],
            fromLocation: [
                "Place"
            ],
            toLocation: [
                "Place"
            ]
        }
    ],
    [
        "map",
        {
            _id: "Map",
            _name: "Map",
            _parent: [
                "CreativeWork"
            ],
            mapType: [
                "MapCategoryType"
            ]
        }
    ],
    [
        "courseinstance",
        {
            _id: "CourseInstance",
            _name: "CourseInstance",
            _parent: [
                "Event"
            ],
            courseMode: [
                "Text",
                "URL"
            ],
            instructor: [
                "Person"
            ]
        }
    ],
    [
        "menu",
        {
            _id: "Menu",
            _name: "Menu",
            _parent: [
                "CreativeWork"
            ],
            hasMenuItem: [
                "MenuItem"
            ],
            hasMenuSection: [
                "MenuSection"
            ]
        }
    ],
    [
        "servicechannel",
        {
            _id: "ServiceChannel",
            _name: "ServiceChannel",
            _parent: [
                "Intangible"
            ],
            availableLanguage: [
                "Text",
                "Language"
            ],
            processingTime: [
                "Duration"
            ],
            providesService: [
                "Service"
            ],
            serviceLocation: [
                "Place"
            ],
            servicePhone: [
                "ContactPoint"
            ],
            servicePostalAddress: [
                "PostalAddress"
            ],
            serviceSmsNumber: [
                "ContactPoint"
            ],
            serviceUrl: [
                "URL"
            ]
        }
    ],
    [
        "wpsidebar",
        {
            _id: "WPSideBar",
            _name: "WPSideBar",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "webpageelement",
        {
            _id: "WebPageElement",
            _name: "WebPageElement",
            _parent: [
                "CreativeWork"
            ],
            cssSelector: [
                "CssSelectorType"
            ],
            xpath: [
                "XPathType"
            ]
        }
    ],
    [
        "financialservice",
        {
            _id: "FinancialService",
            _name: "FinancialService",
            _parent: [
                "LocalBusiness"
            ],
            feesAndCommissionsSpecification: [
                "URL",
                "Text"
            ]
        }
    ],
    [
        "financialproduct",
        {
            _id: "FinancialProduct",
            _name: "FinancialProduct",
            _parent: [
                "Service"
            ],
            annualPercentageRate: [
                "Number",
                "QuantitativeValue"
            ],
            feesAndCommissionsSpecification: [
                "URL",
                "Text"
            ],
            interestRate: [
                "QuantitativeValue",
                "Number"
            ]
        }
    ],
    [
        "shoestore",
        {
            _id: "ShoeStore",
            _name: "ShoeStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "datafeed",
        {
            _id: "DataFeed",
            _name: "DataFeed",
            _parent: [
                "Dataset"
            ],
            dataFeedElement: [
                "DataFeedItem",
                "Text",
                "Thing"
            ]
        }
    ],
    [
        "petstore",
        {
            _id: "PetStore",
            _name: "PetStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "ondemandevent",
        {
            _id: "OnDemandEvent",
            _name: "OnDemandEvent",
            _parent: [
                "PublicationEvent"
            ]
        }
    ],
    [
        "aggregateoffer",
        {
            _id: "AggregateOffer",
            _name: "AggregateOffer",
            _parent: [
                "Offer"
            ],
            highPrice: [
                "Number",
                "Text"
            ],
            lowPrice: [
                "Number",
                "Text"
            ],
            offerCount: [
                "Integer"
            ],
            offers: [
                "Demand",
                "Offer"
            ]
        }
    ],
    [
        "alignmentobject",
        {
            _id: "AlignmentObject",
            _name: "AlignmentObject",
            _parent: [
                "Intangible"
            ],
            alignmentType: [
                "Text"
            ],
            educationalFramework: [
                "Text"
            ],
            targetDescription: [
                "Text"
            ],
            targetName: [
                "Text"
            ],
            targetUrl: [
                "URL"
            ]
        }
    ],
    [
        "clothingstore",
        {
            _id: "ClothingStore",
            _name: "ClothingStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "course",
        {
            _id: "Course",
            _name: "Course",
            _parent: [
                "CreativeWork",
                "LearningResource"
            ],
            courseCode: [
                "Text"
            ],
            coursePrerequisites: [
                "AlignmentObject",
                "Course",
                "Text"
            ],
            educationalCredentialAwarded: [
                "URL",
                "Text"
            ],
            hasCourseInstance: [
                "CourseInstance"
            ]
        }
    ],
    [
        "governmentoffice",
        {
            _id: "GovernmentOffice",
            _name: "GovernmentOffice",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "leaveaction",
        {
            _id: "LeaveAction",
            _name: "LeaveAction",
            _parent: [
                "InteractAction"
            ],
            event: [
                "Event"
            ]
        }
    ],
    [
        "chapter",
        {
            _id: "Chapter",
            _name: "Chapter",
            _parent: [
                "CreativeWork"
            ],
            pageEnd: [
                "Integer",
                "Text"
            ],
            pageStart: [
                "Text",
                "Integer"
            ],
            pagination: [
                "Text"
            ]
        }
    ],
    [
        "publicationvolume",
        {
            _id: "PublicationVolume",
            _name: "PublicationVolume",
            _parent: [
                "CreativeWork"
            ],
            pageEnd: [
                "Integer",
                "Text"
            ],
            pageStart: [
                "Text",
                "Integer"
            ],
            pagination: [
                "Text"
            ],
            volumeNumber: [
                "Integer",
                "Text"
            ]
        }
    ],
    [
        "mosque",
        {
            _id: "Mosque",
            _name: "Mosque",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "claimreview",
        {
            _id: "ClaimReview",
            _name: "ClaimReview",
            _parent: [
                "Review"
            ],
            claimReviewed: [
                "Text"
            ]
        }
    ],
    [
        "gasstation",
        {
            _id: "GasStation",
            _name: "GasStation",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "commentaction",
        {
            _id: "CommentAction",
            _name: "CommentAction",
            _parent: [
                "CommunicateAction"
            ],
            resultComment: [
                "Comment"
            ]
        }
    ],
    [
        "entrypoint",
        {
            _id: "EntryPoint",
            _name: "EntryPoint",
            _parent: [
                "Intangible"
            ],
            actionApplication: [
                "SoftwareApplication"
            ],
            actionPlatform: [
                "URL",
                "Text"
            ],
            contentType: [
                "Text"
            ],
            encodingType: [
                "Text"
            ],
            httpMethod: [
                "Text"
            ],
            urlTemplate: [
                "Text"
            ]
        }
    ],
    [
        "musiccomposition",
        {
            _id: "MusicComposition",
            _name: "MusicComposition",
            _parent: [
                "CreativeWork"
            ],
            composer: [
                "Person",
                "Organization"
            ],
            firstPerformance: [
                "Event"
            ],
            includedComposition: [
                "MusicComposition"
            ],
            iswcCode: [
                "Text"
            ],
            lyricist: [
                "Person"
            ],
            lyrics: [
                "CreativeWork"
            ],
            musicalKey: [
                "Text"
            ],
            musicArrangement: [
                "MusicComposition"
            ],
            musicCompositionForm: [
                "Text"
            ],
            recordedAs: [
                "MusicRecording"
            ]
        }
    ],
    [
        "school",
        {
            _id: "School",
            _name: "School",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "educationalorganization",
        {
            _id: "EducationalOrganization",
            _name: "EducationalOrganization",
            _parent: [
                "Organization",
                "CivicStructure"
            ],
            alumni: [
                "Person"
            ]
        }
    ],
    [
        "photograph",
        {
            _id: "Photograph",
            _name: "Photograph",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "continent",
        {
            _id: "Continent",
            _name: "Continent",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "library",
        {
            _id: "Library",
            _name: "Library",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "touristinformationcenter",
        {
            _id: "TouristInformationCenter",
            _name: "TouristInformationCenter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "propertyvaluespecification",
        {
            _id: "PropertyValueSpecification",
            _name: "PropertyValueSpecification",
            _parent: [
                "Intangible"
            ],
            defaultValue: [
                "Thing",
                "Text"
            ],
            maxValue: [
                "Number"
            ],
            minValue: [
                "Number"
            ],
            multipleValues: [
                "Boolean"
            ],
            readonlyValue: [
                "Boolean"
            ],
            stepValue: [
                "Number"
            ],
            valueMaxLength: [
                "Number"
            ],
            valueMinLength: [
                "Number"
            ],
            valueName: [
                "Text"
            ],
            valuePattern: [
                "Text"
            ],
            valueRequired: [
                "Boolean"
            ]
        }
    ],
    [
        "maximumdoseschedule",
        {
            _id: "MaximumDoseSchedule",
            _name: "MaximumDoseSchedule",
            _parent: [
                "DoseSchedule"
            ]
        }
    ],
    [
        "doseschedule",
        {
            _id: "DoseSchedule",
            _name: "DoseSchedule",
            _parent: [
                "MedicalIntangible"
            ],
            doseUnit: [
                "Text"
            ],
            doseValue: [
                "Number",
                "QualitativeValue"
            ],
            frequency: [
                "Text"
            ],
            targetPopulation: [
                "Text"
            ]
        }
    ],
    [
        "ddxelement",
        {
            _id: "DDxElement",
            _name: "DDxElement",
            _parent: [
                "MedicalIntangible"
            ],
            diagnosis: [
                "MedicalCondition"
            ],
            distinguishingSign: [
                "MedicalSignOrSymptom"
            ]
        }
    ],
    [
        "orderitem",
        {
            _id: "OrderItem",
            _name: "OrderItem",
            _parent: [
                "Intangible"
            ],
            orderDelivery: [
                "ParcelDelivery"
            ],
            orderedItem: [
                "Product",
                "OrderItem",
                "Service"
            ],
            orderItemNumber: [
                "Text"
            ],
            orderItemStatus: [
                "OrderStatus"
            ],
            orderQuantity: [
                "Number"
            ]
        }
    ],
    [
        "aquarium",
        {
            _id: "Aquarium",
            _name: "Aquarium",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "selfstorage",
        {
            _id: "SelfStorage",
            _name: "SelfStorage",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "breadcrumblist",
        {
            _id: "BreadcrumbList",
            _name: "BreadcrumbList",
            _parent: [
                "ItemList"
            ]
        }
    ],
    [
        "preschool",
        {
            _id: "Preschool",
            _name: "Preschool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "howtotool",
        {
            _id: "HowToTool",
            _name: "HowToTool",
            _parent: [
                "HowToItem"
            ]
        }
    ],
    [
        "buyaction",
        {
            _id: "BuyAction",
            _name: "BuyAction",
            _parent: [
                "TradeAction"
            ],
            seller: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "broadcastchannel",
        {
            _id: "BroadcastChannel",
            _name: "BroadcastChannel",
            _parent: [
                "Intangible"
            ],
            broadcastChannelId: [
                "Text"
            ],
            broadcastFrequency: [
                "Text",
                "BroadcastFrequencySpecification"
            ],
            broadcastServiceTier: [
                "Text"
            ],
            genre: [
                "URL",
                "Text"
            ],
            inBroadcastLineup: [
                "CableOrSatelliteService"
            ],
            providesBroadcastService: [
                "BroadcastService"
            ]
        }
    ],
    [
        "florist",
        {
            _id: "Florist",
            _name: "Florist",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "occupation",
        {
            _id: "Occupation",
            _name: "Occupation",
            _parent: [
                "Intangible"
            ],
            estimatedSalary: [
                "MonetaryAmount",
                "MonetaryAmountDistribution",
                "Number"
            ],
            experienceRequirements: [
                "Text"
            ],
            occupationLocation: [
                "AdministrativeArea"
            ],
            responsibilities: [
                "Text"
            ],
            skills: [
                "Text"
            ]
        }
    ],
    [
        "cableorsatelliteservice",
        {
            _id: "CableOrSatelliteService",
            _name: "CableOrSatelliteService",
            _parent: [
                "Service"
            ]
        }
    ],
    [
        "preventionindication",
        {
            _id: "PreventionIndication",
            _name: "PreventionIndication",
            _parent: [
                "MedicalIndication"
            ]
        }
    ],
    [
        "exerciseaction",
        {
            _id: "ExerciseAction",
            _name: "ExerciseAction",
            _parent: [
                "PlayAction"
            ],
            diet: [
                "Diet"
            ],
            distance: [
                "Distance"
            ],
            exerciseCourse: [
                "Place"
            ],
            exercisePlan: [
                "ExercisePlan"
            ],
            exerciseRelatedDiet: [
                "Diet"
            ],
            exerciseType: [
                "Text"
            ],
            fromLocation: [
                "Place"
            ],
            opponent: [
                "Person"
            ],
            sportsActivityLocation: [
                "SportsActivityLocation"
            ],
            sportsEvent: [
                "SportsEvent"
            ],
            sportsTeam: [
                "SportsTeam"
            ],
            toLocation: [
                "Place"
            ]
        }
    ],
    [
        "playaction",
        {
            _id: "PlayAction",
            _name: "PlayAction",
            _parent: [
                "Action"
            ],
            audience: [
                "Audience"
            ],
            event: [
                "Event"
            ]
        }
    ],
    [
        "sportsevent",
        {
            _id: "SportsEvent",
            _name: "SportsEvent",
            _parent: [
                "Event"
            ],
            awayTeam: [
                "SportsTeam",
                "Person"
            ],
            competitor: [
                "SportsTeam",
                "Person"
            ],
            homeTeam: [
                "Person",
                "SportsTeam"
            ]
        }
    ],
    [
        "replyaction",
        {
            _id: "ReplyAction",
            _name: "ReplyAction",
            _parent: [
                "CommunicateAction"
            ],
            resultComment: [
                "Comment"
            ]
        }
    ],
    [
        "travelaction",
        {
            _id: "TravelAction",
            _name: "TravelAction",
            _parent: [
                "MoveAction"
            ],
            distance: [
                "Distance"
            ]
        }
    ],
    [
        "reservoir",
        {
            _id: "Reservoir",
            _name: "Reservoir",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "diet",
        {
            _id: "Diet",
            _name: "Diet",
            _parent: [
                "LifestyleModification",
                "CreativeWork"
            ],
            dietFeatures: [
                "Text"
            ],
            endorsers: [
                "Organization",
                "Person"
            ],
            expertConsiderations: [
                "Text"
            ],
            physiologicalBenefits: [
                "Text"
            ],
            risks: [
                "Text"
            ]
        }
    ],
    [
        "geocoordinates",
        {
            _id: "GeoCoordinates",
            _name: "GeoCoordinates",
            _parent: [
                "StructuredValue"
            ],
            address: [
                "PostalAddress",
                "Text"
            ],
            addressCountry: [
                "Country",
                "Text"
            ],
            elevation: [
                "Text",
                "Number"
            ],
            latitude: [
                "Number",
                "Text"
            ],
            longitude: [
                "Text",
                "Number"
            ],
            postalCode: [
                "Text"
            ]
        }
    ],
    [
        "offercatalog",
        {
            _id: "OfferCatalog",
            _name: "OfferCatalog",
            _parent: [
                "ItemList"
            ]
        }
    ],
    [
        "loanorcredit",
        {
            _id: "LoanOrCredit",
            _name: "LoanOrCredit",
            _parent: [
                "FinancialProduct"
            ],
            amount: [
                "Number",
                "MonetaryAmount"
            ],
            currency: [
                "Text"
            ],
            loanTerm: [
                "QuantitativeValue"
            ],
            requiredCollateral: [
                "Text",
                "Thing"
            ]
        }
    ],
    [
        "collection",
        {
            _id: "Collection",
            _name: "Collection",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "typeandquantitynode",
        {
            _id: "TypeAndQuantityNode",
            _name: "TypeAndQuantityNode",
            _parent: [
                "StructuredValue"
            ],
            amountOfThisGood: [
                "Number"
            ],
            businessFunction: [
                "BusinessFunction"
            ],
            typeOfGood: [
                "Service",
                "Product"
            ],
            unitCode: [
                "Text",
                "URL"
            ],
            unitText: [
                "Text"
            ]
        }
    ],
    [
        "unregisteraction",
        {
            _id: "UnRegisterAction",
            _name: "UnRegisterAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "aboutpage",
        {
            _id: "AboutPage",
            _name: "AboutPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "loseaction",
        {
            _id: "LoseAction",
            _name: "LoseAction",
            _parent: [
                "AchieveAction"
            ],
            winner: [
                "Person"
            ]
        }
    ],
    [
        "achieveaction",
        {
            _id: "AchieveAction",
            _name: "AchieveAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "shoppingcenter",
        {
            _id: "ShoppingCenter",
            _name: "ShoppingCenter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "compoundpricespecification",
        {
            _id: "CompoundPriceSpecification",
            _name: "CompoundPriceSpecification",
            _parent: [
                "PriceSpecification"
            ],
            priceComponent: [
                "UnitPriceSpecification"
            ]
        }
    ],
    [
        "medicalsignorsymptom",
        {
            _id: "MedicalSignOrSymptom",
            _name: "MedicalSignOrSymptom",
            _parent: [
                "MedicalCondition"
            ],
            possibleTreatment: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "state",
        {
            _id: "State",
            _name: "State",
            _parent: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "playground",
        {
            _id: "Playground",
            _name: "Playground",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "appendaction",
        {
            _id: "AppendAction",
            _name: "AppendAction",
            _parent: [
                "InsertAction"
            ]
        }
    ],
    [
        "insertaction",
        {
            _id: "InsertAction",
            _name: "InsertAction",
            _parent: [
                "AddAction"
            ],
            toLocation: [
                "Place"
            ]
        }
    ],
    [
        "addaction",
        {
            _id: "AddAction",
            _name: "AddAction",
            _parent: [
                "UpdateAction"
            ]
        }
    ],
    [
        "updateaction",
        {
            _id: "UpdateAction",
            _name: "UpdateAction",
            _parent: [
                "Action"
            ],
            targetCollection: [
                "Thing"
            ]
        }
    ],
    [
        "eventreservation",
        {
            _id: "EventReservation",
            _name: "EventReservation",
            _parent: [
                "Reservation"
            ]
        }
    ],
    [
        "museum",
        {
            _id: "Museum",
            _name: "Museum",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "beautysalon",
        {
            _id: "BeautySalon",
            _name: "BeautySalon",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "healthandbeautybusiness",
        {
            _id: "HealthAndBeautyBusiness",
            _name: "HealthAndBeautyBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalsign",
        {
            _id: "MedicalSign",
            _name: "MedicalSign",
            _parent: [
                "MedicalSignOrSymptom"
            ],
            identifyingExam: [
                "PhysicalExam"
            ],
            identifyingTest: [
                "MedicalTest"
            ]
        }
    ],
    [
        "bookseries",
        {
            _id: "BookSeries",
            _name: "BookSeries",
            _parent: [
                "CreativeWorkSeries"
            ]
        }
    ],
    [
        "replaceaction",
        {
            _id: "ReplaceAction",
            _name: "ReplaceAction",
            _parent: [
                "UpdateAction"
            ],
            replacee: [
                "Thing"
            ],
            replacer: [
                "Thing"
            ]
        }
    ],
    [
        "parkingfacility",
        {
            _id: "ParkingFacility",
            _name: "ParkingFacility",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "highschool",
        {
            _id: "HighSchool",
            _name: "HighSchool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "bankaccount",
        {
            _id: "BankAccount",
            _name: "BankAccount",
            _parent: [
                "FinancialProduct"
            ]
        }
    ],
    [
        "datafeeditem",
        {
            _id: "DataFeedItem",
            _name: "DataFeedItem",
            _parent: [
                "Intangible"
            ],
            dateCreated: [
                "Date",
                "DateTime"
            ],
            dateDeleted: [
                "DateTime",
                "Date"
            ],
            dateModified: [
                "DateTime",
                "Date"
            ],
            item: [
                "Thing"
            ]
        }
    ],
    [
        "pawnshop",
        {
            _id: "PawnShop",
            _name: "PawnShop",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "physician",
        {
            _id: "Physician",
            _name: "Physician",
            _parent: [
                "MedicalBusiness",
                "MedicalOrganization"
            ],
            availableService: [
                "MedicalTherapy",
                "MedicalProcedure",
                "MedicalTest"
            ],
            hospitalAffiliation: [
                "Hospital"
            ],
            medicalSpecialty: [
                "MedicalSpecialty"
            ]
        }
    ],
    [
        "assignaction",
        {
            _id: "AssignAction",
            _name: "AssignAction",
            _parent: [
                "AllocateAction"
            ]
        }
    ],
    [
        "conversation",
        {
            _id: "Conversation",
            _name: "Conversation",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "trainstation",
        {
            _id: "TrainStation",
            _name: "TrainStation",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "ownershipinfo",
        {
            _id: "OwnershipInfo",
            _name: "OwnershipInfo",
            _parent: [
                "StructuredValue"
            ],
            acquiredFrom: [
                "Organization",
                "Person"
            ],
            ownedFrom: [
                "DateTime"
            ],
            ownedThrough: [
                "DateTime"
            ],
            typeOfGood: [
                "Service",
                "Product"
            ]
        }
    ],
    [
        "permit",
        {
            _id: "Permit",
            _name: "Permit",
            _parent: [
                "Intangible"
            ],
            issuedBy: [
                "Organization"
            ],
            issuedThrough: [
                "Service"
            ],
            permitAudience: [
                "Audience"
            ],
            validFor: [
                "Duration"
            ],
            validFrom: [
                "DateTime",
                "Date"
            ],
            validIn: [
                "AdministrativeArea"
            ],
            validUntil: [
                "Date"
            ]
        }
    ],
    [
        "sportsclub",
        {
            _id: "SportsClub",
            _name: "SportsClub",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "bridge",
        {
            _id: "Bridge",
            _name: "Bridge",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "businessaudience",
        {
            _id: "BusinessAudience",
            _name: "BusinessAudience",
            _parent: [
                "Audience"
            ],
            numberOfEmployees: [
                "QuantitativeValue"
            ],
            yearlyRevenue: [
                "QuantitativeValue"
            ],
            yearsInOperation: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "volcano",
        {
            _id: "Volcano",
            _name: "Volcano",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "cafeorcoffeeshop",
        {
            _id: "CafeOrCoffeeShop",
            _name: "CafeOrCoffeeShop",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "medicalwebpage",
        {
            _id: "MedicalWebPage",
            _name: "MedicalWebPage",
            _parent: [
                "WebPage"
            ],
            medicalAudience: [
                "MedicalAudienceType",
                "MedicalAudience"
            ]
        }
    ],
    [
        "atlas",
        {
            _id: "Atlas",
            _name: "Atlas",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "book",
        {
            _id: "Book",
            _name: "Book",
            _parent: [
                "CreativeWork"
            ],
            abridged: [
                "Boolean"
            ],
            bookEdition: [
                "Text"
            ],
            bookFormat: [
                "BookFormatType"
            ],
            illustrator: [
                "Person"
            ],
            isbn: [
                "Text"
            ],
            numberOfPages: [
                "Integer"
            ]
        }
    ],
    [
        "grocerystore",
        {
            _id: "GroceryStore",
            _name: "GroceryStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "insuranceagency",
        {
            _id: "InsuranceAgency",
            _name: "InsuranceAgency",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "audioobject",
        {
            _id: "AudioObject",
            _name: "AudioObject",
            _parent: [
                "MediaObject"
            ],
            caption: [
                "Text",
                "MediaObject"
            ],
            transcript: [
                "Text"
            ]
        }
    ],
    [
        "stadiumorarena",
        {
            _id: "StadiumOrArena",
            _name: "StadiumOrArena",
            _parent: [
                "CivicStructure",
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "conveniencestore",
        {
            _id: "ConvenienceStore",
            _name: "ConvenienceStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "vein",
        {
            _id: "Vein",
            _name: "Vein",
            _parent: [
                "Vessel"
            ],
            drainsTo: [
                "Vessel"
            ],
            regionDrained: [
                "AnatomicalStructure",
                "AnatomicalSystem"
            ],
            tributary: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "muscle",
        {
            _id: "Muscle",
            _name: "Muscle",
            _parent: [
                "AnatomicalStructure"
            ],
            antagonist: [
                "Muscle"
            ],
            bloodSupply: [
                "Vessel"
            ],
            insertion: [
                "AnatomicalStructure"
            ],
            muscleAction: [
                "Text"
            ],
            nerve: [
                "Nerve"
            ]
        }
    ],
    [
        "autopartsstore",
        {
            _id: "AutoPartsStore",
            _name: "AutoPartsStore",
            _parent: [
                "Store",
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "wpadblock",
        {
            _id: "WPAdBlock",
            _name: "WPAdBlock",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "recommendeddoseschedule",
        {
            _id: "RecommendedDoseSchedule",
            _name: "RecommendedDoseSchedule",
            _parent: [
                "DoseSchedule"
            ]
        }
    ],
    [
        "borrowaction",
        {
            _id: "BorrowAction",
            _name: "BorrowAction",
            _parent: [
                "TransferAction"
            ],
            lender: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "ligament",
        {
            _id: "Ligament",
            _name: "Ligament",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "qapage",
        {
            _id: "QAPage",
            _name: "QAPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "searchaction",
        {
            _id: "SearchAction",
            _name: "SearchAction",
            _parent: [
                "Action"
            ],
            query: [
                "Text"
            ]
        }
    ],
    [
        "pathologytest",
        {
            _id: "PathologyTest",
            _name: "PathologyTest",
            _parent: [
                "MedicalTest"
            ],
            tissueSample: [
                "Text"
            ]
        }
    ],
    [
        "jewelrystore",
        {
            _id: "JewelryStore",
            _name: "JewelryStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "viewaction",
        {
            _id: "ViewAction",
            _name: "ViewAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "wpfooter",
        {
            _id: "WPFooter",
            _name: "WPFooter",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "likeaction",
        {
            _id: "LikeAction",
            _name: "LikeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "reactaction",
        {
            _id: "ReactAction",
            _name: "ReactAction",
            _parent: [
                "AssessAction"
            ]
        }
    ],
    [
        "mobileapplication",
        {
            _id: "MobileApplication",
            _name: "MobileApplication",
            _parent: [
                "SoftwareApplication"
            ],
            carrierRequirements: [
                "Text"
            ]
        }
    ],
    [
        "downloadaction",
        {
            _id: "DownloadAction",
            _name: "DownloadAction",
            _parent: [
                "TransferAction"
            ]
        }
    ],
    [
        "synagogue",
        {
            _id: "Synagogue",
            _name: "Synagogue",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "tireshop",
        {
            _id: "TireShop",
            _name: "TireShop",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "policestation",
        {
            _id: "PoliceStation",
            _name: "PoliceStation",
            _parent: [
                "CivicStructure",
                "EmergencyService"
            ]
        }
    ],
    [
        "healthclub",
        {
            _id: "HealthClub",
            _name: "HealthClub",
            _parent: [
                "SportsActivityLocation",
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "animalshelter",
        {
            _id: "AnimalShelter",
            _name: "AnimalShelter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "textdigitaldocument",
        {
            _id: "TextDigitalDocument",
            _name: "TextDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "thesis",
        {
            _id: "Thesis",
            _name: "Thesis",
            _parent: [
                "CreativeWork"
            ],
            inSupportOf: [
                "Text"
            ]
        }
    ],
    [
        "workersunion",
        {
            _id: "WorkersUnion",
            _name: "WorkersUnion",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "lendaction",
        {
            _id: "LendAction",
            _name: "LendAction",
            _parent: [
                "TransferAction"
            ],
            borrower: [
                "Person"
            ]
        }
    ],
    [
        "listenaction",
        {
            _id: "ListenAction",
            _name: "ListenAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "hotelroom",
        {
            _id: "HotelRoom",
            _name: "HotelRoom",
            _parent: [
                "Room"
            ],
            bed: [
                "BedDetails",
                "BedType",
                "Text"
            ],
            occupancy: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "apartment",
        {
            _id: "Apartment",
            _name: "Apartment",
            _parent: [
                "Accommodation"
            ],
            numberOfRooms: [
                "Number",
                "QuantitativeValue"
            ],
            occupancy: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "suite",
        {
            _id: "Suite",
            _name: "Suite",
            _parent: [
                "Accommodation"
            ],
            bed: [
                "BedDetails",
                "BedType",
                "Text"
            ],
            numberOfRooms: [
                "Number",
                "QuantitativeValue"
            ],
            occupancy: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "singlefamilyresidence",
        {
            _id: "SingleFamilyResidence",
            _name: "SingleFamilyResidence",
            _parent: [
                "House"
            ],
            numberOfRooms: [
                "Number",
                "QuantitativeValue"
            ],
            occupancy: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "house",
        {
            _id: "House",
            _name: "House",
            _parent: [
                "Accommodation"
            ],
            numberOfRooms: [
                "Number",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "deleteaction",
        {
            _id: "DeleteAction",
            _name: "DeleteAction",
            _parent: [
                "UpdateAction"
            ]
        }
    ],
    [
        "sitenavigationelement",
        {
            _id: "SiteNavigationElement",
            _name: "SiteNavigationElement",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "governmentservice",
        {
            _id: "GovernmentService",
            _name: "GovernmentService",
            _parent: [
                "Service"
            ],
            serviceOperator: [
                "Organization"
            ]
        }
    ],
    [
        "legalservice",
        {
            _id: "LegalService",
            _name: "LegalService",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "digitaldocumentpermission",
        {
            _id: "DigitalDocumentPermission",
            _name: "DigitalDocumentPermission",
            _parent: [
                "Intangible"
            ],
            grantee: [
                "ContactPoint",
                "Organization",
                "Person",
                "Audience"
            ],
            permissionType: [
                "DigitalDocumentPermissionType"
            ]
        }
    ],
    [
        "registeraction",
        {
            _id: "RegisterAction",
            _name: "RegisterAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "housepainter",
        {
            _id: "HousePainter",
            _name: "HousePainter",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "homeandconstructionbusiness",
        {
            _id: "HomeAndConstructionBusiness",
            _name: "HomeAndConstructionBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "diagnosticlab",
        {
            _id: "DiagnosticLab",
            _name: "DiagnosticLab",
            _parent: [
                "MedicalOrganization"
            ],
            availableTest: [
                "MedicalTest"
            ]
        }
    ],
    [
        "gameserver",
        {
            _id: "GameServer",
            _name: "GameServer",
            _parent: [
                "Intangible"
            ],
            game: [
                "VideoGame"
            ],
            playersOnline: [
                "Integer"
            ],
            serverStatus: [
                "GameServerStatus"
            ]
        }
    ],
    [
        "attorney",
        {
            _id: "Attorney",
            _name: "Attorney",
            _parent: [
                "LegalService"
            ]
        }
    ],
    [
        "beddetails",
        {
            _id: "BedDetails",
            _name: "BedDetails",
            _parent: [
                "Intangible"
            ],
            numberOfBeds: [
                "Number"
            ],
            typeOfBed: [
                "BedType",
                "Text"
            ]
        }
    ],
    [
        "rsvpaction",
        {
            _id: "RsvpAction",
            _name: "RsvpAction",
            _parent: [
                "InformAction"
            ],
            additionalNumberOfGuests: [
                "Number"
            ],
            comment: [
                "Comment"
            ],
            rsvpResponse: [
                "RsvpResponseType"
            ]
        }
    ],
    [
        "informaction",
        {
            _id: "InformAction",
            _name: "InformAction",
            _parent: [
                "CommunicateAction"
            ],
            event: [
                "Event"
            ]
        }
    ],
    [
        "toystore",
        {
            _id: "ToyStore",
            _name: "ToyStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "resumeaction",
        {
            _id: "ResumeAction",
            _name: "ResumeAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "controlaction",
        {
            _id: "ControlAction",
            _name: "ControlAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "busorcoach",
        {
            _id: "BusOrCoach",
            _name: "BusOrCoach",
            _parent: [
                "Vehicle"
            ],
            acrissCode: [
                "Text"
            ],
            roofLoad: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "movierentalstore",
        {
            _id: "MovieRentalStore",
            _name: "MovieRentalStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "winaction",
        {
            _id: "WinAction",
            _name: "WinAction",
            _parent: [
                "AchieveAction"
            ],
            loser: [
                "Person"
            ]
        }
    ],
    [
        "watchaction",
        {
            _id: "WatchAction",
            _name: "WatchAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "performaction",
        {
            _id: "PerformAction",
            _name: "PerformAction",
            _parent: [
                "PlayAction"
            ],
            entertainmentBusiness: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "medicalguidelinecontraindication",
        {
            _id: "MedicalGuidelineContraindication",
            _name: "MedicalGuidelineContraindication",
            _parent: [
                "MedicalGuideline"
            ]
        }
    ],
    [
        "imagingtest",
        {
            _id: "ImagingTest",
            _name: "ImagingTest",
            _parent: [
                "MedicalTest"
            ],
            imagingTechnique: [
                "MedicalImagingTechnique"
            ]
        }
    ],
    [
        "investmentordeposit",
        {
            _id: "InvestmentOrDeposit",
            _name: "InvestmentOrDeposit",
            _parent: [
                "FinancialProduct"
            ],
            amount: [
                "Number",
                "MonetaryAmount"
            ]
        }
    ],
    [
        "installaction",
        {
            _id: "InstallAction",
            _name: "InstallAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "distillery",
        {
            _id: "Distillery",
            _name: "Distillery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "medicalcontraindication",
        {
            _id: "MedicalContraindication",
            _name: "MedicalContraindication",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "postoffice",
        {
            _id: "PostOffice",
            _name: "PostOffice",
            _parent: [
                "GovernmentOffice"
            ]
        }
    ],
    [
        "checkoutpage",
        {
            _id: "CheckoutPage",
            _name: "CheckoutPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "veterinarycare",
        {
            _id: "VeterinaryCare",
            _name: "VeterinaryCare",
            _parent: [
                "MedicalOrganization"
            ]
        }
    ],
    [
        "autorepair",
        {
            _id: "AutoRepair",
            _name: "AutoRepair",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "crematorium",
        {
            _id: "Crematorium",
            _name: "Crematorium",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "parentaudience",
        {
            _id: "ParentAudience",
            _name: "ParentAudience",
            _parent: [
                "PeopleAudience"
            ],
            childMaxAge: [
                "Number"
            ],
            childMinAge: [
                "Number"
            ]
        }
    ],
    [
        "exercisegym",
        {
            _id: "ExerciseGym",
            _name: "ExerciseGym",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "profilepage",
        {
            _id: "ProfilePage",
            _name: "ProfilePage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "approvedindication",
        {
            _id: "ApprovedIndication",
            _name: "ApprovedIndication",
            _parent: [
                "MedicalIndication"
            ]
        }
    ],
    [
        "reservationpackage",
        {
            _id: "ReservationPackage",
            _name: "ReservationPackage",
            _parent: [
                "Reservation"
            ],
            subReservation: [
                "Reservation"
            ]
        }
    ],
    [
        "datacatalog",
        {
            _id: "DataCatalog",
            _name: "DataCatalog",
            _parent: [
                "CreativeWork"
            ],
            dataset: [
                "Dataset"
            ]
        }
    ],
    [
        "checkaction",
        {
            _id: "CheckAction",
            _name: "CheckAction",
            _parent: [
                "FindAction"
            ]
        }
    ],
    [
        "findaction",
        {
            _id: "FindAction",
            _name: "FindAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "disagreeaction",
        {
            _id: "DisagreeAction",
            _name: "DisagreeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "itempage",
        {
            _id: "ItemPage",
            _name: "ItemPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "discussionforumposting",
        {
            _id: "DiscussionForumPosting",
            _name: "DiscussionForumPosting",
            _parent: [
                "SocialMediaPosting"
            ]
        }
    ],
    [
        "car",
        {
            _id: "Car",
            _name: "Car",
            _parent: [
                "Vehicle"
            ],
            acrissCode: [
                "Text"
            ],
            roofLoad: [
                "QuantitativeValue"
            ]
        }
    ],
    [
        "dancegroup",
        {
            _id: "DanceGroup",
            _name: "DanceGroup",
            _parent: [
                "PerformingGroup"
            ]
        }
    ],
    [
        "datadownload",
        {
            _id: "DataDownload",
            _name: "DataDownload",
            _parent: [
                "MediaObject"
            ]
        }
    ],
    [
        "cancelaction",
        {
            _id: "CancelAction",
            _name: "CancelAction",
            _parent: [
                "PlanAction"
            ]
        }
    ],
    [
        "rentaction",
        {
            _id: "RentAction",
            _name: "RentAction",
            _parent: [
                "TradeAction"
            ],
            landlord: [
                "Organization",
                "Person"
            ],
            realEstateAgent: [
                "RealEstateAgent"
            ]
        }
    ],
    [
        "joint",
        {
            _id: "Joint",
            _name: "Joint",
            _parent: [
                "AnatomicalStructure"
            ],
            biomechnicalClass: [
                "Text"
            ],
            functionalClass: [
                "MedicalEntity",
                "Text"
            ],
            structuralClass: [
                "Text"
            ]
        }
    ],
    [
        "drawaction",
        {
            _id: "DrawAction",
            _name: "DrawAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "motorcycledealer",
        {
            _id: "MotorcycleDealer",
            _name: "MotorcycleDealer",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "optician",
        {
            _id: "Optician",
            _name: "Optician",
            _parent: [
                "MedicalBusiness"
            ]
        }
    ],
    [
        "checkoutaction",
        {
            _id: "CheckOutAction",
            _name: "CheckOutAction",
            _parent: [
                "CommunicateAction"
            ]
        }
    ],
    [
        "ignoreaction",
        {
            _id: "IgnoreAction",
            _name: "IgnoreAction",
            _parent: [
                "AssessAction"
            ]
        }
    ],
    [
        "druglegalstatus",
        {
            _id: "DrugLegalStatus",
            _name: "DrugLegalStatus",
            _parent: [
                "MedicalIntangible"
            ],
            applicableLocation: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "realestateagent",
        {
            _id: "RealEstateAgent",
            _name: "RealEstateAgent",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "applyaction",
        {
            _id: "ApplyAction",
            _name: "ApplyAction",
            _parent: [
                "OrganizeAction"
            ]
        }
    ],
    [
        "endorseaction",
        {
            _id: "EndorseAction",
            _name: "EndorseAction",
            _parent: [
                "ReactAction"
            ],
            endorsee: [
                "Person",
                "Organization"
            ]
        }
    ],
    [
        "currencyconversionservice",
        {
            _id: "CurrencyConversionService",
            _name: "CurrencyConversionService",
            _parent: [
                "FinancialProduct"
            ]
        }
    ],
    [
        "medicalguidelinerecommendation",
        {
            _id: "MedicalGuidelineRecommendation",
            _name: "MedicalGuidelineRecommendation",
            _parent: [
                "MedicalGuideline"
            ],
            recommendationStrength: [
                "Text"
            ]
        }
    ],
    [
        "medicalsymptom",
        {
            _id: "MedicalSymptom",
            _name: "MedicalSymptom",
            _parent: [
                "MedicalSignOrSymptom"
            ]
        }
    ],
    [
        "hindutemple",
        {
            _id: "HinduTemple",
            _name: "HinduTemple",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "searchresultspage",
        {
            _id: "SearchResultsPage",
            _name: "SearchResultsPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "deliveryevent",
        {
            _id: "DeliveryEvent",
            _name: "DeliveryEvent",
            _parent: [
                "Event"
            ],
            accessCode: [
                "Text"
            ],
            availableFrom: [
                "DateTime"
            ],
            availableThrough: [
                "DateTime"
            ],
            hasDeliveryMethod: [
                "DeliveryMethod"
            ]
        }
    ],
    [
        "educationalaudience",
        {
            _id: "EducationalAudience",
            _name: "EducationalAudience",
            _parent: [
                "Audience"
            ],
            educationalRole: [
                "Text"
            ]
        }
    ],
    [
        "danceevent",
        {
            _id: "DanceEvent",
            _name: "DanceEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "occupationaltherapy",
        {
            _id: "OccupationalTherapy",
            _name: "OccupationalTherapy",
            _parent: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "medicalobservationalstudy",
        {
            _id: "MedicalObservationalStudy",
            _name: "MedicalObservationalStudy",
            _parent: [
                "MedicalStudy"
            ],
            studyDesign: [
                "MedicalObservationalStudyDesign"
            ]
        }
    ],
    [
        "embassy",
        {
            _id: "Embassy",
            _name: "Embassy",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "governmentbuilding",
        {
            _id: "GovernmentBuilding",
            _name: "GovernmentBuilding",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "foodevent",
        {
            _id: "FoodEvent",
            _name: "FoodEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "outletstore",
        {
            _id: "OutletStore",
            _name: "OutletStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "inviteaction",
        {
            _id: "InviteAction",
            _name: "InviteAction",
            _parent: [
                "CommunicateAction"
            ],
            event: [
                "Event"
            ]
        }
    ],
    [
        "artery",
        {
            _id: "Artery",
            _name: "Artery",
            _parent: [
                "Vessel"
            ],
            arterialBranch: [
                "AnatomicalStructure"
            ],
            supplyTo: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "paymentchargespecification",
        {
            _id: "PaymentChargeSpecification",
            _name: "PaymentChargeSpecification",
            _parent: [
                "PriceSpecification"
            ],
            appliesToDeliveryMethod: [
                "DeliveryMethod"
            ],
            appliesToPaymentMethod: [
                "PaymentMethod"
            ]
        }
    ],
    [
        "casino",
        {
            _id: "Casino",
            _name: "Casino",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "amusementpark",
        {
            _id: "AmusementPark",
            _name: "AmusementPark",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "depositaccount",
        {
            _id: "DepositAccount",
            _name: "DepositAccount",
            _parent: [
                "InvestmentOrDeposit",
                "BankAccount"
            ]
        }
    ],
    [
        "motel",
        {
            _id: "Motel",
            _name: "Motel",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "subscribeaction",
        {
            _id: "SubscribeAction",
            _name: "SubscribeAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "businessevent",
        {
            _id: "BusinessEvent",
            _name: "BusinessEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "childcare",
        {
            _id: "ChildCare",
            _name: "ChildCare",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalcode",
        {
            _id: "MedicalCode",
            _name: "MedicalCode",
            _parent: [
                "MedicalIntangible",
                "CategoryCode"
            ],
            codingSystem: [
                "Text"
            ]
        }
    ],
    [
        "audiobook",
        {
            _id: "Audiobook",
            _name: "Audiobook",
            _parent: [
                "Book",
                "AudioObject"
            ],
            duration: [
                "Duration"
            ],
            readBy: [
                "Person"
            ]
        }
    ],
    [
        "bookmarkaction",
        {
            _id: "BookmarkAction",
            _name: "BookmarkAction",
            _parent: [
                "OrganizeAction"
            ]
        }
    ],
    [
        "internetcafe",
        {
            _id: "InternetCafe",
            _name: "InternetCafe",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "theaterevent",
        {
            _id: "TheaterEvent",
            _name: "TheaterEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "defenceestablishment",
        {
            _id: "DefenceEstablishment",
            _name: "DefenceEstablishment",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "church",
        {
            _id: "Church",
            _name: "Church",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "liquorstore",
        {
            _id: "LiquorStore",
            _name: "LiquorStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "reporteddoseschedule",
        {
            _id: "ReportedDoseSchedule",
            _name: "ReportedDoseSchedule",
            _parent: [
                "DoseSchedule"
            ]
        }
    ],
    [
        "reserveaction",
        {
            _id: "ReserveAction",
            _name: "ReserveAction",
            _parent: [
                "PlanAction"
            ]
        }
    ],
    [
        "monetaryamountdistribution",
        {
            _id: "MonetaryAmountDistribution",
            _name: "MonetaryAmountDistribution",
            _parent: [
                "QuantitativeValueDistribution"
            ],
            currency: [
                "Text"
            ]
        }
    ],
    [
        "wantaction",
        {
            _id: "WantAction",
            _name: "WantAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "taxiservice",
        {
            _id: "TaxiService",
            _name: "TaxiService",
            _parent: [
                "Service"
            ]
        }
    ],
    [
        "readaction",
        {
            _id: "ReadAction",
            _name: "ReadAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "plumber",
        {
            _id: "Plumber",
            _name: "Plumber",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "rentalcarreservation",
        {
            _id: "RentalCarReservation",
            _name: "RentalCarReservation",
            _parent: [
                "Reservation"
            ],
            dropoffLocation: [
                "Place"
            ],
            dropoffTime: [
                "DateTime"
            ],
            pickupLocation: [
                "Place"
            ],
            pickupTime: [
                "DateTime"
            ]
        }
    ],
    [
        "artgallery",
        {
            _id: "ArtGallery",
            _name: "ArtGallery",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "geocircle",
        {
            _id: "GeoCircle",
            _name: "GeoCircle",
            _parent: [
                "GeoShape"
            ],
            geoMidpoint: [
                "GeoCoordinates"
            ],
            geoRadius: [
                "Text",
                "Number",
                "Distance"
            ]
        }
    ],
    [
        "tattooparlor",
        {
            _id: "TattooParlor",
            _name: "TattooParlor",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "joinaction",
        {
            _id: "JoinAction",
            _name: "JoinAction",
            _parent: [
                "InteractAction"
            ],
            event: [
                "Event"
            ]
        }
    ],
    [
        "dentist",
        {
            _id: "Dentist",
            _name: "Dentist",
            _parent: [
                "MedicalOrganization",
                "LocalBusiness",
                "MedicalBusiness"
            ]
        }
    ],
    [
        "motorcyclerepair",
        {
            _id: "MotorcycleRepair",
            _name: "MotorcycleRepair",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "foodservice",
        {
            _id: "FoodService",
            _name: "FoodService",
            _parent: [
                "Service"
            ]
        }
    ],
    [
        "furniturestore",
        {
            _id: "FurnitureStore",
            _name: "FurnitureStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "professionalservice",
        {
            _id: "ProfessionalService",
            _name: "ProfessionalService",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "energy",
        {
            _id: "Energy",
            _name: "Energy",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "rejectaction",
        {
            _id: "RejectAction",
            _name: "RejectAction",
            _parent: [
                "AllocateAction"
            ]
        }
    ],
    [
        "resort",
        {
            _id: "Resort",
            _name: "Resort",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "governmentpermit",
        {
            _id: "GovernmentPermit",
            _name: "GovernmentPermit",
            _parent: [
                "Permit"
            ]
        }
    ],
    [
        "table",
        {
            _id: "Table",
            _name: "Table",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "writeaction",
        {
            _id: "WriteAction",
            _name: "WriteAction",
            _parent: [
                "CreateAction"
            ],
            inLanguage: [
                "Language",
                "Text"
            ]
        }
    ],
    [
        "governmentorganization",
        {
            _id: "GovernmentOrganization",
            _name: "GovernmentOrganization",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "busreservation",
        {
            _id: "BusReservation",
            _name: "BusReservation",
            _parent: [
                "Reservation"
            ]
        }
    ],
    [
        "notedigitaldocument",
        {
            _id: "NoteDigitalDocument",
            _name: "NoteDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "drinkaction",
        {
            _id: "DrinkAction",
            _name: "DrinkAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "tenniscomplex",
        {
            _id: "TennisComplex",
            _name: "TennisComplex",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "bookstore",
        {
            _id: "BookStore",
            _name: "BookStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "subwaystation",
        {
            _id: "SubwayStation",
            _name: "SubwayStation",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "campground",
        {
            _id: "Campground",
            _name: "Campground",
            _parent: [
                "CivicStructure",
                "LodgingBusiness"
            ]
        }
    ],
    [
        "courthouse",
        {
            _id: "Courthouse",
            _name: "Courthouse",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "hardwarestore",
        {
            _id: "HardwareStore",
            _name: "HardwareStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "askaction",
        {
            _id: "AskAction",
            _name: "AskAction",
            _parent: [
                "CommunicateAction"
            ],
            question: [
                "Question"
            ]
        }
    ],
    [
        "researcher",
        {
            _id: "Researcher",
            _name: "Researcher",
            _parent: [
                "Audience"
            ]
        }
    ],
    [
        "trackaction",
        {
            _id: "TrackAction",
            _name: "TrackAction",
            _parent: [
                "FindAction"
            ],
            deliveryMethod: [
                "DeliveryMethod"
            ]
        }
    ],
    [
        "visualartsevent",
        {
            _id: "VisualArtsEvent",
            _name: "VisualArtsEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "comicseries",
        {
            _id: "ComicSeries",
            _name: "ComicSeries",
            _parent: [
                "Periodical"
            ]
        }
    ],
    [
        "periodical",
        {
            _id: "Periodical",
            _name: "Periodical",
            _parent: [
                "CreativeWorkSeries"
            ]
        }
    ],
    [
        "rvpark",
        {
            _id: "RVPark",
            _name: "RVPark",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "childrensevent",
        {
            _id: "ChildrensEvent",
            _name: "ChildrensEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "hobbyshop",
        {
            _id: "HobbyShop",
            _name: "HobbyShop",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "seabodyofwater",
        {
            _id: "SeaBodyOfWater",
            _name: "SeaBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "medicalcause",
        {
            _id: "MedicalCause",
            _name: "MedicalCause",
            _parent: [
                "MedicalEntity"
            ],
            causeOf: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "departmentstore",
        {
            _id: "DepartmentStore",
            _name: "DepartmentStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "wholesalestore",
        {
            _id: "WholesaleStore",
            _name: "WholesaleStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "skiresort",
        {
            _id: "SkiResort",
            _name: "SkiResort",
            _parent: [
                "Resort",
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "automatedteller",
        {
            _id: "AutomatedTeller",
            _name: "AutomatedTeller",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "canal",
        {
            _id: "Canal",
            _name: "Canal",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "ngo",
        {
            _id: "NGO",
            _name: "NGO",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "motorizedbicycle",
        {
            _id: "MotorizedBicycle",
            _name: "MotorizedBicycle",
            _parent: [
                "Vehicle"
            ]
        }
    ],
    [
        "barorpub",
        {
            _id: "BarOrPub",
            _name: "BarOrPub",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "float",
        {
            _id: "Float",
            _name: "Float",
            _parent: [
                "Number"
            ]
        }
    ],
    [
        "barcode",
        {
            _id: "Barcode",
            _name: "Barcode",
            _parent: [
                "ImageObject"
            ]
        }
    ],
    [
        "acceptaction",
        {
            _id: "AcceptAction",
            _name: "AcceptAction",
            _parent: [
                "AllocateAction"
            ]
        }
    ],
    [
        "mensclothingstore",
        {
            _id: "MensClothingStore",
            _name: "MensClothingStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "mediagallery",
        {
            _id: "MediaGallery",
            _name: "MediaGallery",
            _parent: [
                "CollectionPage"
            ]
        }
    ],
    [
        "nightclub",
        {
            _id: "NightClub",
            _name: "NightClub",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "brewery",
        {
            _id: "Brewery",
            _name: "Brewery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "confirmaction",
        {
            _id: "ConfirmAction",
            _name: "ConfirmAction",
            _parent: [
                "InformAction"
            ]
        }
    ],
    [
        "theatergroup",
        {
            _id: "TheaterGroup",
            _name: "TheaterGroup",
            _parent: [
                "PerformingGroup"
            ]
        }
    ],
    [
        "publicswimmingpool",
        {
            _id: "PublicSwimmingPool",
            _name: "PublicSwimmingPool",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "radiochannel",
        {
            _id: "RadioChannel",
            _name: "RadioChannel",
            _parent: [
                "BroadcastChannel"
            ]
        }
    ],
    [
        "accountingservice",
        {
            _id: "AccountingService",
            _name: "AccountingService",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "cemetery",
        {
            _id: "Cemetery",
            _name: "Cemetery",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "checkinaction",
        {
            _id: "CheckInAction",
            _name: "CheckInAction",
            _parent: [
                "CommunicateAction"
            ]
        }
    ],
    [
        "recyclingcenter",
        {
            _id: "RecyclingCenter",
            _name: "RecyclingCenter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "painting",
        {
            _id: "Painting",
            _name: "Painting",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "festival",
        {
            _id: "Festival",
            _name: "Festival",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "roofingcontractor",
        {
            _id: "RoofingContractor",
            _name: "RoofingContractor",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "radioseason",
        {
            _id: "RadioSeason",
            _name: "RadioSeason",
            _parent: [
                "CreativeWorkSeason"
            ]
        }
    ],
    [
        "psychologicaltreatment",
        {
            _id: "PsychologicalTreatment",
            _name: "PsychologicalTreatment",
            _parent: [
                "TherapeuticProcedure"
            ]
        }
    ],
    [
        "catholicchurch",
        {
            _id: "CatholicChurch",
            _name: "CatholicChurch",
            _parent: [
                "Church"
            ]
        }
    ],
    [
        "emailmessage",
        {
            _id: "EmailMessage",
            _name: "EmailMessage",
            _parent: [
                "Message"
            ]
        }
    ],
    [
        "mobilephonestore",
        {
            _id: "MobilePhoneStore",
            _name: "MobilePhoneStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "middleschool",
        {
            _id: "MiddleSchool",
            _name: "MiddleSchool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "bowlingalley",
        {
            _id: "BowlingAlley",
            _name: "BowlingAlley",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "imagegallery",
        {
            _id: "ImageGallery",
            _name: "ImageGallery",
            _parent: [
                "MediaGallery"
            ]
        }
    ],
    [
        "voteaction",
        {
            _id: "VoteAction",
            _name: "VoteAction",
            _parent: [
                "ChooseAction"
            ],
            candidate: [
                "Person"
            ]
        }
    ],
    [
        "socialevent",
        {
            _id: "SocialEvent",
            _name: "SocialEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "eataction",
        {
            _id: "EatAction",
            _name: "EatAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "pond",
        {
            _id: "Pond",
            _name: "Pond",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "literaryevent",
        {
            _id: "LiteraryEvent",
            _name: "LiteraryEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "takeaction",
        {
            _id: "TakeAction",
            _name: "TakeAction",
            _parent: [
                "TransferAction"
            ]
        }
    ],
    [
        "amradiochannel",
        {
            _id: "AMRadioChannel",
            _name: "AMRadioChannel",
            _parent: [
                "RadioChannel"
            ]
        }
    ],
    [
        "autobodyshop",
        {
            _id: "AutoBodyShop",
            _name: "AutoBodyShop",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "homegoodsstore",
        {
            _id: "HomeGoodsStore",
            _name: "HomeGoodsStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "lakebodyofwater",
        {
            _id: "LakeBodyOfWater",
            _name: "LakeBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "televisionstation",
        {
            _id: "TelevisionStation",
            _name: "TelevisionStation",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "paymentservice",
        {
            _id: "PaymentService",
            _name: "PaymentService",
            _parent: [
                "FinancialProduct"
            ]
        }
    ],
    [
        "radiationtherapy",
        {
            _id: "RadiationTherapy",
            _name: "RadiationTherapy",
            _parent: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "beach",
        {
            _id: "Beach",
            _name: "Beach",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "musicvideoobject",
        {
            _id: "MusicVideoObject",
            _name: "MusicVideoObject",
            _parent: [
                "MediaObject"
            ]
        }
    ],
    [
        "marryaction",
        {
            _id: "MarryAction",
            _name: "MarryAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "landmarksorhistoricalbuildings",
        {
            _id: "LandmarksOrHistoricalBuildings",
            _name: "LandmarksOrHistoricalBuildings",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "generalcontractor",
        {
            _id: "GeneralContractor",
            _name: "GeneralContractor",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "shareaction",
        {
            _id: "ShareAction",
            _name: "ShareAction",
            _parent: [
                "CommunicateAction"
            ]
        }
    ],
    [
        "wpheader",
        {
            _id: "WPHeader",
            _name: "WPHeader",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "icecreamshop",
        {
            _id: "IceCreamShop",
            _name: "IceCreamShop",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "notary",
        {
            _id: "Notary",
            _name: "Notary",
            _parent: [
                "LegalService"
            ]
        }
    ],
    [
        "deactivateaction",
        {
            _id: "DeactivateAction",
            _name: "DeactivateAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "fastfoodrestaurant",
        {
            _id: "FastFoodRestaurant",
            _name: "FastFoodRestaurant",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "drycleaningorlaundry",
        {
            _id: "DryCleaningOrLaundry",
            _name: "DryCleaningOrLaundry",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "corporation",
        {
            _id: "Corporation",
            _name: "Corporation",
            _parent: [
                "Organization"
            ],
            tickerSymbol: [
                "Text"
            ]
        }
    ],
    [
        "zoo",
        {
            _id: "Zoo",
            _name: "Zoo",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "park",
        {
            _id: "Park",
            _name: "Park",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "exhibitionevent",
        {
            _id: "ExhibitionEvent",
            _name: "ExhibitionEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "comedyclub",
        {
            _id: "ComedyClub",
            _name: "ComedyClub",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "surgicalprocedure",
        {
            _id: "SurgicalProcedure",
            _name: "SurgicalProcedure",
            _parent: [
                "MedicalProcedure"
            ]
        }
    ],
    [
        "radioclip",
        {
            _id: "RadioClip",
            _name: "RadioClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "agreeaction",
        {
            _id: "AgreeAction",
            _name: "AgreeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "employmentagency",
        {
            _id: "EmploymentAgency",
            _name: "EmploymentAgency",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "prependaction",
        {
            _id: "PrependAction",
            _name: "PrependAction",
            _parent: [
                "InsertAction"
            ]
        }
    ],
    [
        "firestation",
        {
            _id: "FireStation",
            _name: "FireStation",
            _parent: [
                "CivicStructure",
                "EmergencyService"
            ]
        }
    ],
    [
        "hotel",
        {
            _id: "Hotel",
            _name: "Hotel",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "comiccoverart",
        {
            _id: "ComicCoverArt",
            _name: "ComicCoverArt",
            _parent: [
                "ComicStory",
                "CoverArt"
            ]
        }
    ],
    [
        "coverart",
        {
            _id: "CoverArt",
            _name: "CoverArt",
            _parent: [
                "VisualArtwork"
            ]
        }
    ],
    [
        "electronicsstore",
        {
            _id: "ElectronicsStore",
            _name: "ElectronicsStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "befriendaction",
        {
            _id: "BefriendAction",
            _name: "BefriendAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "nailsalon",
        {
            _id: "NailSalon",
            _name: "NailSalon",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "bloodtest",
        {
            _id: "BloodTest",
            _name: "BloodTest",
            _parent: [
                "MedicalTest"
            ]
        }
    ],
    [
        "televisionchannel",
        {
            _id: "TelevisionChannel",
            _name: "TelevisionChannel",
            _parent: [
                "BroadcastChannel"
            ]
        }
    ],
    [
        "photographaction",
        {
            _id: "PhotographAction",
            _name: "PhotographAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "electrician",
        {
            _id: "Electrician",
            _name: "Electrician",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "wearaction",
        {
            _id: "WearAction",
            _name: "WearAction",
            _parent: [
                "UseAction"
            ]
        }
    ],
    [
        "travelagency",
        {
            _id: "TravelAgency",
            _name: "TravelAgency",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "legislativebuilding",
        {
            _id: "LegislativeBuilding",
            _name: "LegislativeBuilding",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "suspendaction",
        {
            _id: "SuspendAction",
            _name: "SuspendAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "bankorcreditunion",
        {
            _id: "BankOrCreditUnion",
            _name: "BankOrCreditUnion",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "videogallery",
        {
            _id: "VideoGallery",
            _name: "VideoGallery",
            _parent: [
                "MediaGallery"
            ]
        }
    ],
    [
        "bone",
        {
            _id: "Bone",
            _name: "Bone",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "hostel",
        {
            _id: "Hostel",
            _name: "Hostel",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "orderaction",
        {
            _id: "OrderAction",
            _name: "OrderAction",
            _parent: [
                "TradeAction"
            ],
            deliveryMethod: [
                "DeliveryMethod"
            ]
        }
    ],
    [
        "movingcompany",
        {
            _id: "MovingCompany",
            _name: "MovingCompany",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "cityhall",
        {
            _id: "CityHall",
            _name: "CityHall",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "campingpitch",
        {
            _id: "CampingPitch",
            _name: "CampingPitch",
            _parent: [
                "Accommodation"
            ]
        }
    ],
    [
        "comedyevent",
        {
            _id: "ComedyEvent",
            _name: "ComedyEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "autodealer",
        {
            _id: "AutoDealer",
            _name: "AutoDealer",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "reviewaction",
        {
            _id: "ReviewAction",
            _name: "ReviewAction",
            _parent: [
                "AssessAction"
            ],
            resultReview: [
                "Review"
            ]
        }
    ],
    [
        "fmradiochannel",
        {
            _id: "FMRadioChannel",
            _name: "FMRadioChannel",
            _parent: [
                "RadioChannel"
            ]
        }
    ],
    [
        "pharmacy",
        {
            _id: "Pharmacy",
            _name: "Pharmacy",
            _parent: [
                "MedicalBusiness",
                "MedicalOrganization"
            ]
        }
    ],
    [
        "paintaction",
        {
            _id: "PaintAction",
            _name: "PaintAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "performingartstheater",
        {
            _id: "PerformingArtsTheater",
            _name: "PerformingArtsTheater",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "employeraggregaterating",
        {
            _id: "EmployerAggregateRating",
            _name: "EmployerAggregateRating",
            _parent: [
                "AggregateRating"
            ]
        }
    ],
    [
        "city",
        {
            _id: "City",
            _name: "City",
            _parent: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "adultentertainment",
        {
            _id: "AdultEntertainment",
            _name: "AdultEntertainment",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "vitalsign",
        {
            _id: "VitalSign",
            _name: "VitalSign",
            _parent: [
                "MedicalSign"
            ]
        }
    ],
    [
        "scheduleaction",
        {
            _id: "ScheduleAction",
            _name: "ScheduleAction",
            _parent: [
                "PlanAction"
            ]
        }
    ],
    [
        "arriveaction",
        {
            _id: "ArriveAction",
            _name: "ArriveAction",
            _parent: [
                "MoveAction"
            ]
        }
    ],
    [
        "musicevent",
        {
            _id: "MusicEvent",
            _name: "MusicEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "hairsalon",
        {
            _id: "HairSalon",
            _name: "HairSalon",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "dayspa",
        {
            _id: "DaySpa",
            _name: "DaySpa",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "discoveraction",
        {
            _id: "DiscoverAction",
            _name: "DiscoverAction",
            _parent: [
                "FindAction"
            ]
        }
    ],
    [
        "endorsementrating",
        {
            _id: "EndorsementRating",
            _name: "EndorsementRating",
            _parent: [
                "Rating"
            ]
        }
    ],
    [
        "elementaryschool",
        {
            _id: "ElementarySchool",
            _name: "ElementarySchool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "activateaction",
        {
            _id: "ActivateAction",
            _name: "ActivateAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "radioepisode",
        {
            _id: "RadioEpisode",
            _name: "RadioEpisode",
            _parent: [
                "Episode"
            ]
        }
    ],
    [
        "tieaction",
        {
            _id: "TieAction",
            _name: "TieAction",
            _parent: [
                "AchieveAction"
            ]
        }
    ],
    [
        "dislikeaction",
        {
            _id: "DislikeAction",
            _name: "DislikeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "faqpage",
        {
            _id: "FAQPage",
            _name: "FAQPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "winery",
        {
            _id: "Winery",
            _name: "Winery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "diagnosticprocedure",
        {
            _id: "DiagnosticProcedure",
            _name: "DiagnosticProcedure",
            _parent: [
                "MedicalProcedure"
            ]
        }
    ],
    [
        "riverbodyofwater",
        {
            _id: "RiverBodyOfWater",
            _name: "RiverBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "newspaper",
        {
            _id: "Newspaper",
            _name: "Newspaper",
            _parent: [
                "Periodical"
            ]
        }
    ],
    [
        "meetingroom",
        {
            _id: "MeetingRoom",
            _name: "MeetingRoom",
            _parent: [
                "Room"
            ]
        }
    ],
    [
        "eventvenue",
        {
            _id: "EventVenue",
            _name: "EventVenue",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "movieclip",
        {
            _id: "MovieClip",
            _name: "MovieClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "hvacbusiness",
        {
            _id: "HVACBusiness",
            _name: "HVACBusiness",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "taxistand",
        {
            _id: "TaxiStand",
            _name: "TaxiStand",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "medicalriskcalculator",
        {
            _id: "MedicalRiskCalculator",
            _name: "MedicalRiskCalculator",
            _parent: [
                "MedicalRiskEstimator"
            ]
        }
    ],
    [
        "locksmith",
        {
            _id: "Locksmith",
            _name: "Locksmith",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "trainreservation",
        {
            _id: "TrainReservation",
            _name: "TrainReservation",
            _parent: [
                "Reservation"
            ]
        }
    ],
    [
        "musicvenue",
        {
            _id: "MusicVenue",
            _name: "MusicVenue",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "oceanbodyofwater",
        {
            _id: "OceanBodyOfWater",
            _name: "OceanBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "spreadsheetdigitaldocument",
        {
            _id: "SpreadsheetDigitalDocument",
            _name: "SpreadsheetDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "motorcycle",
        {
            _id: "Motorcycle",
            _name: "Motorcycle",
            _parent: [
                "Vehicle"
            ]
        }
    ],
    [
        "collegeoruniversity",
        {
            _id: "CollegeOrUniversity",
            _name: "CollegeOrUniversity",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "qualitativevalue",
        {
            _id: "QualitativeValue",
            _name: "QualitativeValue",
            _parent: [
                "Enumeration"
            ],
            additionalProperty: [
                "PropertyValue"
            ],
            equal: [
                "QualitativeValue"
            ],
            greater: [
                "QualitativeValue"
            ],
            greaterOrEqual: [
                "QualitativeValue"
            ],
            lesser: [
                "QualitativeValue"
            ],
            lesserOrEqual: [
                "QualitativeValue"
            ],
            nonEqual: [
                "QualitativeValue"
            ],
            valueReference: [
                "QualitativeValue",
                "QuantitativeValue",
                "Enumeration",
                "StructuredValue",
                "PropertyValue"
            ]
        }
    ],
    [
        "steeringpositionvalue",
        {
            _values: [
                "RightHandDriving",
                "LeftHandDriving"
            ]
        }
    ],
    [
        "qualitativevalue",
        {
            _values: []
        }
    ],
    [
        "medicinesystem",
        {
            _values: [
                "TraditionalChinese",
                "Homeopathic",
                "Osteopathic",
                "WesternConventional",
                "Ayurvedic",
                "Chiropractic"
            ]
        }
    ],
    [
        "medicalenumeration",
        {
            _values: []
        }
    ],
    [
        "medicaltrialdesign",
        {
            _values: [
                "MultiCenterTrial",
                "TripleBlindedTrial",
                "InternationalTrial",
                "DoubleBlindedTrial",
                "SingleBlindedTrial",
                "OpenTrial",
                "RandomizedTrial",
                "PlaceboControlledTrial",
                "SingleCenterTrial"
            ]
        }
    ],
    [
        "gendertype",
        {
            _values: [
                "Male",
                "Female"
            ]
        }
    ],
    [
        "medicalobservationalstudydesign",
        {
            _values: [
                "Registry",
                "Longitudinal",
                "CaseSeries",
                "CohortStudy",
                "CrossSectional",
                "Observational"
            ]
        }
    ],
    [
        "physicalexam",
        {
            _values: [
                "Neck",
                "Nose",
                "Throat",
                "Lung",
                "Ear",
                "Skin",
                "MusculoskeletalExam",
                "Head",
                "Genitourinary",
                "Neuro",
                "CardiovascularExam",
                "Eye",
                "Abdomen",
                "Appearance"
            ]
        }
    ],
    [
        "itemavailability",
        {
            _values: [
                "SoldOut",
                "PreOrder",
                "PreSale",
                "OnlineOnly",
                "InStoreOnly",
                "OutOfStock",
                "InStock",
                "LimitedAvailability",
                "Discontinued"
            ]
        }
    ],
    [
        "paymentmethod",
        {
            _values: []
        }
    ],
    [
        "bedtype",
        {
            _values: []
        }
    ],
    [
        "itemlistordertype",
        {
            _values: [
                "ItemListOrderDescending",
                "ItemListUnordered",
                "ItemListOrderAscending"
            ]
        }
    ],
    [
        "musicreleaseformattype",
        {
            _values: [
                "VinylFormat",
                "CassetteFormat",
                "DigitalAudioTapeFormat",
                "DVDFormat",
                "LaserDiscFormat",
                "CDFormat",
                "DigitalFormat"
            ]
        }
    ],
    [
        "drugcostcategory",
        {
            _values: [
                "ReimbursementCap",
                "Wholesale",
                "Retail"
            ]
        }
    ],
    [
        "drugprescriptionstatus",
        {
            _values: [
                "OTC",
                "PrescriptionOnly"
            ]
        }
    ],
    [
        "drugpregnancycategory",
        {
            _values: [
                "FDAnotEvaluated",
                "FDAcategoryB",
                "FDAcategoryX",
                "FDAcategoryC",
                "FDAcategoryA",
                "FDAcategoryD"
            ]
        }
    ],
    [
        "restricteddiet",
        {
            _values: [
                "HinduDiet",
                "GlutenFreeDiet",
                "HalalDiet",
                "VeganDiet",
                "VegetarianDiet",
                "KosherDiet",
                "DiabeticDiet",
                "LowFatDiet",
                "LowSaltDiet",
                "LowLactoseDiet",
                "LowCalorieDiet"
            ]
        }
    ],
    [
        "physicalactivitycategory",
        {
            _values: [
                "AnaerobicActivity",
                "LeisureTimeActivity",
                "Flexibility",
                "StrengthTraining",
                "OccupationalActivity",
                "Balance",
                "AerobicActivity"
            ]
        }
    ],
    [
        "contactpointoption",
        {
            _values: [
                "TollFree",
                "HearingImpairedSupported"
            ]
        }
    ],
    [
        "statusenumeration",
        {
            _values: []
        }
    ],
    [
        "paymentstatustype",
        {
            _values: [
                "PaymentComplete",
                "PaymentPastDue",
                "PaymentDue",
                "PaymentDeclined",
                "PaymentAutomaticallyApplied"
            ]
        }
    ],
    [
        "musicalbumreleasetype",
        {
            _values: [
                "SingleRelease",
                "AlbumRelease",
                "EPRelease",
                "BroadcastRelease"
            ]
        }
    ],
    [
        "actionstatustype",
        {
            _values: [
                "FailedActionStatus",
                "CompletedActionStatus",
                "ActiveActionStatus",
                "PotentialActionStatus"
            ]
        }
    ],
    [
        "medicalstudystatus",
        {
            _values: [
                "Terminated",
                "ResultsNotAvailable",
                "Withdrawn",
                "EnrollingByInvitation",
                "NotYetRecruiting",
                "Recruiting",
                "ActiveNotRecruiting",
                "Completed",
                "ResultsAvailable",
                "Suspended"
            ]
        }
    ],
    [
        "creditcard",
        {
            _values: []
        }
    ],
    [
        "paymentcard",
        {
            _values: []
        }
    ],
    [
        "reservationstatustype",
        {
            _values: [
                "ReservationConfirmed",
                "ReservationPending",
                "ReservationHold",
                "ReservationCancelled"
            ]
        }
    ],
    [
        "medicalproceduretype",
        {
            _values: [
                "NoninvasiveProcedure",
                "PercutaneousProcedure"
            ]
        }
    ],
    [
        "medicalimagingtechnique",
        {
            _values: [
                "Ultrasound",
                "MRI",
                "PET",
                "CT",
                "XRay"
            ]
        }
    ],
    [
        "orderstatus",
        {
            _values: [
                "OrderProblem",
                "OrderDelivered",
                "OrderReturned",
                "OrderProcessing",
                "OrderPickupAvailable",
                "OrderCancelled",
                "OrderPaymentDue",
                "OrderInTransit"
            ]
        }
    ],
    [
        "medicaldevicepurpose",
        {
            _values: [
                "Therapeutic",
                "Diagnostic"
            ]
        }
    ],
    [
        "deliverymethod",
        {
            _values: [
                "ParcelService",
                "OnSitePickup",
                "LockerDelivery"
            ]
        }
    ],
    [
        "bookformattype",
        {
            _values: [
                "AudiobookFormat",
                "EBook",
                "GraphicNovel",
                "Hardcover",
                "Paperback"
            ]
        }
    ],
    [
        "infectiousagentclass",
        {
            _values: [
                "MulticellularParasite",
                "Fungus",
                "Prion",
                "Bacteria",
                "Virus",
                "Protozoa"
            ]
        }
    ],
    [
        "carusagetype",
        {
            _values: [
                "RentalVehicleUsage",
                "TaxiVehicleUsage",
                "DrivingSchoolVehicleUsage"
            ]
        }
    ],
    [
        "medicalevidencelevel",
        {
            _values: [
                "EvidenceLevelA",
                "EvidenceLevelC",
                "EvidenceLevelB"
            ]
        }
    ],
    [
        "dayofweek",
        {
            _values: [
                "PublicHolidays",
                "Monday",
                "Friday",
                "Sunday",
                "Thursday",
                "Tuesday",
                "Saturday",
                "Wednesday"
            ]
        }
    ],
    [
        "digitaldocumentpermissiontype",
        {
            _values: [
                "ReadPermission",
                "WritePermission",
                "CommentPermission"
            ]
        }
    ],
    [
        "eventstatustype",
        {
            _values: [
                "EventPostponed",
                "EventMovedOnline",
                "EventRescheduled",
                "EventScheduled",
                "EventCancelled"
            ]
        }
    ],
    [
        "gameserverstatus",
        {
            _values: [
                "OfflinePermanently",
                "OnlineFull",
                "OfflineTemporarily",
                "Online"
            ]
        }
    ],
    [
        "mapcategorytype",
        {
            _values: [
                "ParkingMap",
                "VenueMap",
                "TransitMap",
                "SeatingMap"
            ]
        }
    ],
    [
        "musicalbumproductiontype",
        {
            _values: [
                "DemoAlbum",
                "SpokenWordAlbum",
                "DJMixAlbum",
                "SoundtrackAlbum",
                "RemixAlbum",
                "LiveAlbum",
                "MixtapeAlbum",
                "StudioAlbum",
                "CompilationAlbum"
            ]
        }
    ],
    [
        "specialty",
        {
            _values: []
        }
    ],
    [
        "businessfunction",
        {
            _values: []
        }
    ],
    [
        "warrantyscope",
        {
            _values: []
        }
    ],
    [
        "businessentitytype",
        {
            _values: []
        }
    ],
    [
        "offeritemcondition",
        {
            _values: [
                "DamagedCondition",
                "RefurbishedCondition",
                "UsedCondition",
                "NewCondition"
            ]
        }
    ],
    [
        "rsvpresponsetype",
        {
            _values: [
                "RsvpResponseYes",
                "RsvpResponseMaybe",
                "RsvpResponseNo"
            ]
        }
    ],
    [
        "medicalspecialty",
        {
            _values: [
                "PrimaryCare",
                "SpeechPathology",
                "Genetic",
                "Rheumatologic",
                "Anesthesia",
                "Emergency",
                "Gynecologic",
                "Surgical",
                "Dentistry",
                "Nursing",
                "Hematologic",
                "Pulmonary",
                "Neurologic",
                "PharmacySpecialty",
                "PublicHealth",
                "Geriatric",
                "Urologic",
                "Midwifery",
                "Musculoskeletal",
                "Dermatology",
                "DietNutrition",
                "Physiotherapy",
                "RespiratoryTherapy",
                "Psychiatric",
                "CommunityHealth",
                "Cardiovascular",
                "Toxicologic",
                "Gastroenterologic",
                "Podiatric",
                "Renal",
                "PlasticSurgery",
                "LaboratoryScience",
                "Obstetric",
                "Otolaryngologic",
                "Endocrine",
                "Pathology",
                "Infectious",
                "Oncologic",
                "Optometric",
                "Pediatric"
            ]
        }
    ],
    [
        "medicalaudiencetype",
        {
            _values: [
                "MedicalResearcher",
                "Clinician"
            ]
        }
    ],
    [
        "boardingpolicytype",
        {
            _values: [
                "GroupBoardingPolicy",
                "ZoneBoardingPolicy"
            ]
        }
    ],
    [
        "drivewheelconfigurationvalue",
        {
            _values: [
                "FrontWheelDriveConfiguration",
                "FourWheelDriveConfiguration",
                "AllWheelDriveConfiguration",
                "RearWheelDriveConfiguration"
            ]
        }
    ],
    [
        "gameplaymode",
        {
            _values: [
                "CoOp",
                "MultiPlayer",
                "SinglePlayer"
            ]
        }
    ]
]);
