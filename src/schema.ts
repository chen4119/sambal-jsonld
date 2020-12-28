export const schemaMap: Map<string, unknown> = new Map([
    [
        "enumeration",
        {
            _name: "Enumeration",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "intangible",
        {
            _name: "Intangible",
            _parent: [
                "Thing"
            ]
        }
    ],
    [
        "thing",
        {
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
            _name: "Integer",
            _parent: [
                "Number"
            ]
        }
    ],
    [
        "airline",
        {
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
            _name: "StructuredValue",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "person",
        {
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
            _name: "BlogPosting",
            _parent: [
                "SocialMediaPosting"
            ]
        }
    ],
    [
        "socialmediaposting",
        {
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
            _name: "Duration",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "quantity",
        {
            _name: "Quantity",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "interactioncounter",
        {
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
            _name: "TVClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "clip",
        {
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
            _name: "Series",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "url",
        {
            _name: "URL",
            _parent: [
                "Text"
            ]
        }
    ],
    [
        "flight",
        {
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
            _name: "Mass",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "vehicle",
        {
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
            _name: "BikeStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "store",
        {
            _name: "Store",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "localbusiness",
        {
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
            _name: "BuddhistTemple",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "placeofworship",
        {
            _name: "PlaceOfWorship",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "civicstructure",
        {
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
            _name: "GardenStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "airport",
        {
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
            _name: "SportsOrganization",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "quantitativevalue",
        {
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
            _name: "AutoRental",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "automotivebusiness",
        {
            _name: "AutomotiveBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalbusiness",
        {
            _name: "MedicalBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "productmodel",
        {
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
            _name: "BrainStructure",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "lymphaticvessel",
        {
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
            _name: "Vessel",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "treatmentindication",
        {
            _name: "TreatmentIndication",
            _parent: [
                "MedicalIndication"
            ]
        }
    ],
    [
        "medicalindication",
        {
            _name: "MedicalIndication",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "programmembership",
        {
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
            _name: "Restaurant",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "foodestablishment",
        {
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
            _name: "OrganizeAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "apartmentcomplex",
        {
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
            _name: "Residence",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "softwareapplication",
        {
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
            _name: "InteractAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "payaction",
        {
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
            _name: "AllocateAction",
            _parent: [
                "OrganizeAction"
            ]
        }
    ],
    [
        "giveaction",
        {
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
            _name: "UseAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "apireference",
        {
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
            _name: "FilmAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "createaction",
        {
            _name: "CreateAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "bustrip",
        {
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
            _name: "BusStop",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "busstation",
        {
            _name: "BusStation",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "computerlanguage",
        {
            _name: "ComputerLanguage",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "room",
        {
            _name: "Room",
            _parent: [
                "Accommodation"
            ]
        }
    ],
    [
        "accommodation",
        {
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
            _name: "ScholarlyArticle",
            _parent: [
                "Article"
            ]
        }
    ],
    [
        "educationevent",
        {
            _name: "EducationEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "speakablespecification",
        {
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
            _name: "SportingGoodsStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "individualproduct",
        {
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
            _name: "Answer",
            _parent: [
                "Comment"
            ]
        }
    ],
    [
        "itemlist",
        {
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
            _name: "Waterfall",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "bodyofwater",
        {
            _name: "BodyOfWater",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "landform",
        {
            _name: "Landform",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "review",
        {
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
            _name: "AutoWash",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "officeequipmentstore",
        {
            _name: "OfficeEquipmentStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "gatedresidencecommunity",
        {
            _name: "GatedResidenceCommunity",
            _parent: [
                "Residence"
            ]
        }
    ],
    [
        "bakery",
        {
            _name: "Bakery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "medicalconditionstage",
        {
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
            _name: "MedicalIntangible",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "country",
        {
            _name: "Country",
            _parent: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "administrativearea",
        {
            _name: "AdministrativeArea",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "movietheater",
        {
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
            _name: "EntertainmentBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "sellaction",
        {
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
            _name: "CollectionPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "mountain",
        {
            _name: "Mountain",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "recipe",
        {
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
            _name: "EmergencyService",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalorganization",
        {
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
            _name: "Language",
            _parent: [
                "Intangible"
            ]
        }
    ],
    [
        "brand",
        {
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
            _name: "VideoGameClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "musicrecording",
        {
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
            _name: "MusicStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "howtostep",
        {
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
            _name: "PhysicalTherapy",
            _parent: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "quoteaction",
        {
            _name: "QuoteAction",
            _parent: [
                "TradeAction"
            ]
        }
    ],
    [
        "datatype",
        {
            _name: "DataType",
            _parent: [
                "rdfs:Class"
            ]
        }
    ],
    [
        "preorderaction",
        {
            _name: "PreOrderAction",
            _parent: [
                "TradeAction"
            ]
        }
    ],
    [
        "blog",
        {
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
            _name: "PresentationDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "digitaldocument",
        {
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
            _name: "ContactPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "medicaltrial",
        {
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
            _name: "LifestyleModification",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "newsarticle",
        {
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
            _name: "SaleEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "seat",
        {
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
            _name: "BedAndBreakfast",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "lodgingbusiness",
        {
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
            _name: "Sculpture",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "computerstore",
        {
            _name: "ComputerStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "chooseaction",
        {
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
            _name: "AssessAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "radiostation",
        {
            _name: "RadioStation",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "drugstrength",
        {
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
            _name: "Distance",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "golfcourse",
        {
            _name: "GolfCourse",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "sportsactivitylocation",
        {
            _name: "SportsActivityLocation",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "cookaction",
        {
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
            _name: "PerformingGroup",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "followaction",
        {
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
            _name: "DepartAction",
            _parent: [
                "MoveAction"
            ]
        }
    ],
    [
        "moveaction",
        {
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
            _name: "WPSideBar",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "webpageelement",
        {
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
            _name: "ShoeStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "datafeed",
        {
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
            _name: "PetStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "ondemandevent",
        {
            _name: "OnDemandEvent",
            _parent: [
                "PublicationEvent"
            ]
        }
    ],
    [
        "aggregateoffer",
        {
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
            _name: "ClothingStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "course",
        {
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
            _name: "GovernmentOffice",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "leaveaction",
        {
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
            _name: "Mosque",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "claimreview",
        {
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
            _name: "GasStation",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "commentaction",
        {
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
            _name: "School",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "educationalorganization",
        {
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
            _name: "Photograph",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "continent",
        {
            _name: "Continent",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "library",
        {
            _name: "Library",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "touristinformationcenter",
        {
            _name: "TouristInformationCenter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "propertyvaluespecification",
        {
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
            _name: "MaximumDoseSchedule",
            _parent: [
                "DoseSchedule"
            ]
        }
    ],
    [
        "doseschedule",
        {
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
            _name: "Aquarium",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "selfstorage",
        {
            _name: "SelfStorage",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "breadcrumblist",
        {
            _name: "BreadcrumbList",
            _parent: [
                "ItemList"
            ]
        }
    ],
    [
        "preschool",
        {
            _name: "Preschool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "howtotool",
        {
            _name: "HowToTool",
            _parent: [
                "HowToItem"
            ]
        }
    ],
    [
        "buyaction",
        {
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
            _name: "Florist",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "occupation",
        {
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
            _name: "CableOrSatelliteService",
            _parent: [
                "Service"
            ]
        }
    ],
    [
        "preventionindication",
        {
            _name: "PreventionIndication",
            _parent: [
                "MedicalIndication"
            ]
        }
    ],
    [
        "exerciseaction",
        {
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
            _name: "Reservoir",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "diet",
        {
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
            _name: "OfferCatalog",
            _parent: [
                "ItemList"
            ]
        }
    ],
    [
        "loanorcredit",
        {
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
            _name: "Collection",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "typeandquantitynode",
        {
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
            _name: "UnRegisterAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "aboutpage",
        {
            _name: "AboutPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "loseaction",
        {
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
            _name: "AchieveAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "shoppingcenter",
        {
            _name: "ShoppingCenter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "compoundpricespecification",
        {
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
            _name: "State",
            _parent: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "playground",
        {
            _name: "Playground",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "appendaction",
        {
            _name: "AppendAction",
            _parent: [
                "InsertAction"
            ]
        }
    ],
    [
        "insertaction",
        {
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
            _name: "AddAction",
            _parent: [
                "UpdateAction"
            ]
        }
    ],
    [
        "updateaction",
        {
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
            _name: "EventReservation",
            _parent: [
                "Reservation"
            ]
        }
    ],
    [
        "museum",
        {
            _name: "Museum",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "beautysalon",
        {
            _name: "BeautySalon",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "healthandbeautybusiness",
        {
            _name: "HealthAndBeautyBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalsign",
        {
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
            _name: "BookSeries",
            _parent: [
                "CreativeWorkSeries"
            ]
        }
    ],
    [
        "replaceaction",
        {
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
            _name: "ParkingFacility",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "highschool",
        {
            _name: "HighSchool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "bankaccount",
        {
            _name: "BankAccount",
            _parent: [
                "FinancialProduct"
            ]
        }
    ],
    [
        "datafeeditem",
        {
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
            _name: "PawnShop",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "physician",
        {
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
            _name: "AssignAction",
            _parent: [
                "AllocateAction"
            ]
        }
    ],
    [
        "conversation",
        {
            _name: "Conversation",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "trainstation",
        {
            _name: "TrainStation",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "ownershipinfo",
        {
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
            _name: "SportsClub",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "bridge",
        {
            _name: "Bridge",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "businessaudience",
        {
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
            _name: "Volcano",
            _parent: [
                "Landform"
            ]
        }
    ],
    [
        "cafeorcoffeeshop",
        {
            _name: "CafeOrCoffeeShop",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "medicalwebpage",
        {
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
            _name: "Atlas",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "book",
        {
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
            _name: "GroceryStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "insuranceagency",
        {
            _name: "InsuranceAgency",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "audioobject",
        {
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
            _name: "ConvenienceStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "vein",
        {
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
            _name: "WPAdBlock",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "recommendeddoseschedule",
        {
            _name: "RecommendedDoseSchedule",
            _parent: [
                "DoseSchedule"
            ]
        }
    ],
    [
        "borrowaction",
        {
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
            _name: "Ligament",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "qapage",
        {
            _name: "QAPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "searchaction",
        {
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
            _name: "JewelryStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "viewaction",
        {
            _name: "ViewAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "wpfooter",
        {
            _name: "WPFooter",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "likeaction",
        {
            _name: "LikeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "reactaction",
        {
            _name: "ReactAction",
            _parent: [
                "AssessAction"
            ]
        }
    ],
    [
        "mobileapplication",
        {
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
            _name: "DownloadAction",
            _parent: [
                "TransferAction"
            ]
        }
    ],
    [
        "synagogue",
        {
            _name: "Synagogue",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "tireshop",
        {
            _name: "TireShop",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "policestation",
        {
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
            _name: "AnimalShelter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "textdigitaldocument",
        {
            _name: "TextDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "thesis",
        {
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
            _name: "WorkersUnion",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "lendaction",
        {
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
            _name: "ListenAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "hotelroom",
        {
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
            _name: "DeleteAction",
            _parent: [
                "UpdateAction"
            ]
        }
    ],
    [
        "sitenavigationelement",
        {
            _name: "SiteNavigationElement",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "governmentservice",
        {
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
            _name: "LegalService",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "digitaldocumentpermission",
        {
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
            _name: "RegisterAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "housepainter",
        {
            _name: "HousePainter",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "homeandconstructionbusiness",
        {
            _name: "HomeAndConstructionBusiness",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "diagnosticlab",
        {
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
            _name: "Attorney",
            _parent: [
                "LegalService"
            ]
        }
    ],
    [
        "beddetails",
        {
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
            _name: "ToyStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "resumeaction",
        {
            _name: "ResumeAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "controlaction",
        {
            _name: "ControlAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "busorcoach",
        {
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
            _name: "MovieRentalStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "winaction",
        {
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
            _name: "WatchAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "performaction",
        {
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
            _name: "MedicalGuidelineContraindication",
            _parent: [
                "MedicalGuideline"
            ]
        }
    ],
    [
        "imagingtest",
        {
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
            _name: "InstallAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "distillery",
        {
            _name: "Distillery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "medicalcontraindication",
        {
            _name: "MedicalContraindication",
            _parent: [
                "MedicalEntity"
            ]
        }
    ],
    [
        "postoffice",
        {
            _name: "PostOffice",
            _parent: [
                "GovernmentOffice"
            ]
        }
    ],
    [
        "checkoutpage",
        {
            _name: "CheckoutPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "veterinarycare",
        {
            _name: "VeterinaryCare",
            _parent: [
                "MedicalOrganization"
            ]
        }
    ],
    [
        "autorepair",
        {
            _name: "AutoRepair",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "crematorium",
        {
            _name: "Crematorium",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "parentaudience",
        {
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
            _name: "ExerciseGym",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "profilepage",
        {
            _name: "ProfilePage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "approvedindication",
        {
            _name: "ApprovedIndication",
            _parent: [
                "MedicalIndication"
            ]
        }
    ],
    [
        "reservationpackage",
        {
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
            _name: "CheckAction",
            _parent: [
                "FindAction"
            ]
        }
    ],
    [
        "findaction",
        {
            _name: "FindAction",
            _parent: [
                "Action"
            ]
        }
    ],
    [
        "disagreeaction",
        {
            _name: "DisagreeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "itempage",
        {
            _name: "ItemPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "discussionforumposting",
        {
            _name: "DiscussionForumPosting",
            _parent: [
                "SocialMediaPosting"
            ]
        }
    ],
    [
        "car",
        {
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
            _name: "DanceGroup",
            _parent: [
                "PerformingGroup"
            ]
        }
    ],
    [
        "datadownload",
        {
            _name: "DataDownload",
            _parent: [
                "MediaObject"
            ]
        }
    ],
    [
        "cancelaction",
        {
            _name: "CancelAction",
            _parent: [
                "PlanAction"
            ]
        }
    ],
    [
        "rentaction",
        {
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
            _name: "DrawAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "motorcycledealer",
        {
            _name: "MotorcycleDealer",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "optician",
        {
            _name: "Optician",
            _parent: [
                "MedicalBusiness"
            ]
        }
    ],
    [
        "checkoutaction",
        {
            _name: "CheckOutAction",
            _parent: [
                "CommunicateAction"
            ]
        }
    ],
    [
        "ignoreaction",
        {
            _name: "IgnoreAction",
            _parent: [
                "AssessAction"
            ]
        }
    ],
    [
        "druglegalstatus",
        {
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
            _name: "RealEstateAgent",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "applyaction",
        {
            _name: "ApplyAction",
            _parent: [
                "OrganizeAction"
            ]
        }
    ],
    [
        "endorseaction",
        {
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
            _name: "CurrencyConversionService",
            _parent: [
                "FinancialProduct"
            ]
        }
    ],
    [
        "medicalguidelinerecommendation",
        {
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
            _name: "MedicalSymptom",
            _parent: [
                "MedicalSignOrSymptom"
            ]
        }
    ],
    [
        "hindutemple",
        {
            _name: "HinduTemple",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "searchresultspage",
        {
            _name: "SearchResultsPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "deliveryevent",
        {
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
            _name: "DanceEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "occupationaltherapy",
        {
            _name: "OccupationalTherapy",
            _parent: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "medicalobservationalstudy",
        {
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
            _name: "Embassy",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "governmentbuilding",
        {
            _name: "GovernmentBuilding",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "foodevent",
        {
            _name: "FoodEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "outletstore",
        {
            _name: "OutletStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "inviteaction",
        {
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
            _name: "Casino",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "amusementpark",
        {
            _name: "AmusementPark",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "depositaccount",
        {
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
            _name: "Motel",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "subscribeaction",
        {
            _name: "SubscribeAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "businessevent",
        {
            _name: "BusinessEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "childcare",
        {
            _name: "ChildCare",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "medicalcode",
        {
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
            _name: "BookmarkAction",
            _parent: [
                "OrganizeAction"
            ]
        }
    ],
    [
        "internetcafe",
        {
            _name: "InternetCafe",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "theaterevent",
        {
            _name: "TheaterEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "defenceestablishment",
        {
            _name: "DefenceEstablishment",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "church",
        {
            _name: "Church",
            _parent: [
                "PlaceOfWorship"
            ]
        }
    ],
    [
        "liquorstore",
        {
            _name: "LiquorStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "reporteddoseschedule",
        {
            _name: "ReportedDoseSchedule",
            _parent: [
                "DoseSchedule"
            ]
        }
    ],
    [
        "reserveaction",
        {
            _name: "ReserveAction",
            _parent: [
                "PlanAction"
            ]
        }
    ],
    [
        "monetaryamountdistribution",
        {
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
            _name: "WantAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "taxiservice",
        {
            _name: "TaxiService",
            _parent: [
                "Service"
            ]
        }
    ],
    [
        "readaction",
        {
            _name: "ReadAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "plumber",
        {
            _name: "Plumber",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "rentalcarreservation",
        {
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
            _name: "ArtGallery",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "geocircle",
        {
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
            _name: "TattooParlor",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "joinaction",
        {
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
            _name: "MotorcycleRepair",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "foodservice",
        {
            _name: "FoodService",
            _parent: [
                "Service"
            ]
        }
    ],
    [
        "furniturestore",
        {
            _name: "FurnitureStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "professionalservice",
        {
            _name: "ProfessionalService",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "energy",
        {
            _name: "Energy",
            _parent: [
                "Quantity"
            ]
        }
    ],
    [
        "rejectaction",
        {
            _name: "RejectAction",
            _parent: [
                "AllocateAction"
            ]
        }
    ],
    [
        "resort",
        {
            _name: "Resort",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "governmentpermit",
        {
            _name: "GovernmentPermit",
            _parent: [
                "Permit"
            ]
        }
    ],
    [
        "table",
        {
            _name: "Table",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "writeaction",
        {
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
            _name: "GovernmentOrganization",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "busreservation",
        {
            _name: "BusReservation",
            _parent: [
                "Reservation"
            ]
        }
    ],
    [
        "notedigitaldocument",
        {
            _name: "NoteDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "drinkaction",
        {
            _name: "DrinkAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "tenniscomplex",
        {
            _name: "TennisComplex",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "bookstore",
        {
            _name: "BookStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "subwaystation",
        {
            _name: "SubwayStation",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "campground",
        {
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
            _name: "Courthouse",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "hardwarestore",
        {
            _name: "HardwareStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "askaction",
        {
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
            _name: "Researcher",
            _parent: [
                "Audience"
            ]
        }
    ],
    [
        "trackaction",
        {
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
            _name: "VisualArtsEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "comicseries",
        {
            _name: "ComicSeries",
            _parent: [
                "Periodical"
            ]
        }
    ],
    [
        "periodical",
        {
            _name: "Periodical",
            _parent: [
                "CreativeWorkSeries"
            ]
        }
    ],
    [
        "rvpark",
        {
            _name: "RVPark",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "childrensevent",
        {
            _name: "ChildrensEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "hobbyshop",
        {
            _name: "HobbyShop",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "seabodyofwater",
        {
            _name: "SeaBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "medicalcause",
        {
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
            _name: "DepartmentStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "wholesalestore",
        {
            _name: "WholesaleStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "skiresort",
        {
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
            _name: "AutomatedTeller",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "canal",
        {
            _name: "Canal",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "ngo",
        {
            _name: "NGO",
            _parent: [
                "Organization"
            ]
        }
    ],
    [
        "motorizedbicycle",
        {
            _name: "MotorizedBicycle",
            _parent: [
                "Vehicle"
            ]
        }
    ],
    [
        "barorpub",
        {
            _name: "BarOrPub",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "float",
        {
            _name: "Float",
            _parent: [
                "Number"
            ]
        }
    ],
    [
        "barcode",
        {
            _name: "Barcode",
            _parent: [
                "ImageObject"
            ]
        }
    ],
    [
        "acceptaction",
        {
            _name: "AcceptAction",
            _parent: [
                "AllocateAction"
            ]
        }
    ],
    [
        "mensclothingstore",
        {
            _name: "MensClothingStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "mediagallery",
        {
            _name: "MediaGallery",
            _parent: [
                "CollectionPage"
            ]
        }
    ],
    [
        "nightclub",
        {
            _name: "NightClub",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "brewery",
        {
            _name: "Brewery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "confirmaction",
        {
            _name: "ConfirmAction",
            _parent: [
                "InformAction"
            ]
        }
    ],
    [
        "theatergroup",
        {
            _name: "TheaterGroup",
            _parent: [
                "PerformingGroup"
            ]
        }
    ],
    [
        "publicswimmingpool",
        {
            _name: "PublicSwimmingPool",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "radiochannel",
        {
            _name: "RadioChannel",
            _parent: [
                "BroadcastChannel"
            ]
        }
    ],
    [
        "accountingservice",
        {
            _name: "AccountingService",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "cemetery",
        {
            _name: "Cemetery",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "checkinaction",
        {
            _name: "CheckInAction",
            _parent: [
                "CommunicateAction"
            ]
        }
    ],
    [
        "recyclingcenter",
        {
            _name: "RecyclingCenter",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "painting",
        {
            _name: "Painting",
            _parent: [
                "CreativeWork"
            ]
        }
    ],
    [
        "festival",
        {
            _name: "Festival",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "roofingcontractor",
        {
            _name: "RoofingContractor",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "radioseason",
        {
            _name: "RadioSeason",
            _parent: [
                "CreativeWorkSeason"
            ]
        }
    ],
    [
        "psychologicaltreatment",
        {
            _name: "PsychologicalTreatment",
            _parent: [
                "TherapeuticProcedure"
            ]
        }
    ],
    [
        "catholicchurch",
        {
            _name: "CatholicChurch",
            _parent: [
                "Church"
            ]
        }
    ],
    [
        "emailmessage",
        {
            _name: "EmailMessage",
            _parent: [
                "Message"
            ]
        }
    ],
    [
        "mobilephonestore",
        {
            _name: "MobilePhoneStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "middleschool",
        {
            _name: "MiddleSchool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "bowlingalley",
        {
            _name: "BowlingAlley",
            _parent: [
                "SportsActivityLocation"
            ]
        }
    ],
    [
        "imagegallery",
        {
            _name: "ImageGallery",
            _parent: [
                "MediaGallery"
            ]
        }
    ],
    [
        "voteaction",
        {
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
            _name: "SocialEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "eataction",
        {
            _name: "EatAction",
            _parent: [
                "ConsumeAction"
            ]
        }
    ],
    [
        "pond",
        {
            _name: "Pond",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "literaryevent",
        {
            _name: "LiteraryEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "takeaction",
        {
            _name: "TakeAction",
            _parent: [
                "TransferAction"
            ]
        }
    ],
    [
        "amradiochannel",
        {
            _name: "AMRadioChannel",
            _parent: [
                "RadioChannel"
            ]
        }
    ],
    [
        "autobodyshop",
        {
            _name: "AutoBodyShop",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "homegoodsstore",
        {
            _name: "HomeGoodsStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "lakebodyofwater",
        {
            _name: "LakeBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "televisionstation",
        {
            _name: "TelevisionStation",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "paymentservice",
        {
            _name: "PaymentService",
            _parent: [
                "FinancialProduct"
            ]
        }
    ],
    [
        "radiationtherapy",
        {
            _name: "RadiationTherapy",
            _parent: [
                "MedicalTherapy"
            ]
        }
    ],
    [
        "beach",
        {
            _name: "Beach",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "musicvideoobject",
        {
            _name: "MusicVideoObject",
            _parent: [
                "MediaObject"
            ]
        }
    ],
    [
        "marryaction",
        {
            _name: "MarryAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "landmarksorhistoricalbuildings",
        {
            _name: "LandmarksOrHistoricalBuildings",
            _parent: [
                "Place"
            ]
        }
    ],
    [
        "generalcontractor",
        {
            _name: "GeneralContractor",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "shareaction",
        {
            _name: "ShareAction",
            _parent: [
                "CommunicateAction"
            ]
        }
    ],
    [
        "wpheader",
        {
            _name: "WPHeader",
            _parent: [
                "WebPageElement"
            ]
        }
    ],
    [
        "icecreamshop",
        {
            _name: "IceCreamShop",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "notary",
        {
            _name: "Notary",
            _parent: [
                "LegalService"
            ]
        }
    ],
    [
        "deactivateaction",
        {
            _name: "DeactivateAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "fastfoodrestaurant",
        {
            _name: "FastFoodRestaurant",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "drycleaningorlaundry",
        {
            _name: "DryCleaningOrLaundry",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "corporation",
        {
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
            _name: "Zoo",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "park",
        {
            _name: "Park",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "exhibitionevent",
        {
            _name: "ExhibitionEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "comedyclub",
        {
            _name: "ComedyClub",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "surgicalprocedure",
        {
            _name: "SurgicalProcedure",
            _parent: [
                "MedicalProcedure"
            ]
        }
    ],
    [
        "radioclip",
        {
            _name: "RadioClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "agreeaction",
        {
            _name: "AgreeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "employmentagency",
        {
            _name: "EmploymentAgency",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "prependaction",
        {
            _name: "PrependAction",
            _parent: [
                "InsertAction"
            ]
        }
    ],
    [
        "firestation",
        {
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
            _name: "Hotel",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "comiccoverart",
        {
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
            _name: "CoverArt",
            _parent: [
                "VisualArtwork"
            ]
        }
    ],
    [
        "electronicsstore",
        {
            _name: "ElectronicsStore",
            _parent: [
                "Store"
            ]
        }
    ],
    [
        "befriendaction",
        {
            _name: "BefriendAction",
            _parent: [
                "InteractAction"
            ]
        }
    ],
    [
        "nailsalon",
        {
            _name: "NailSalon",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "bloodtest",
        {
            _name: "BloodTest",
            _parent: [
                "MedicalTest"
            ]
        }
    ],
    [
        "televisionchannel",
        {
            _name: "TelevisionChannel",
            _parent: [
                "BroadcastChannel"
            ]
        }
    ],
    [
        "photographaction",
        {
            _name: "PhotographAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "electrician",
        {
            _name: "Electrician",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "wearaction",
        {
            _name: "WearAction",
            _parent: [
                "UseAction"
            ]
        }
    ],
    [
        "travelagency",
        {
            _name: "TravelAgency",
            _parent: [
                "LocalBusiness"
            ]
        }
    ],
    [
        "legislativebuilding",
        {
            _name: "LegislativeBuilding",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "suspendaction",
        {
            _name: "SuspendAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "bankorcreditunion",
        {
            _name: "BankOrCreditUnion",
            _parent: [
                "FinancialService"
            ]
        }
    ],
    [
        "videogallery",
        {
            _name: "VideoGallery",
            _parent: [
                "MediaGallery"
            ]
        }
    ],
    [
        "bone",
        {
            _name: "Bone",
            _parent: [
                "AnatomicalStructure"
            ]
        }
    ],
    [
        "hostel",
        {
            _name: "Hostel",
            _parent: [
                "LodgingBusiness"
            ]
        }
    ],
    [
        "orderaction",
        {
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
            _name: "MovingCompany",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "cityhall",
        {
            _name: "CityHall",
            _parent: [
                "GovernmentBuilding"
            ]
        }
    ],
    [
        "campingpitch",
        {
            _name: "CampingPitch",
            _parent: [
                "Accommodation"
            ]
        }
    ],
    [
        "comedyevent",
        {
            _name: "ComedyEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "autodealer",
        {
            _name: "AutoDealer",
            _parent: [
                "AutomotiveBusiness"
            ]
        }
    ],
    [
        "reviewaction",
        {
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
            _name: "FMRadioChannel",
            _parent: [
                "RadioChannel"
            ]
        }
    ],
    [
        "pharmacy",
        {
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
            _name: "PaintAction",
            _parent: [
                "CreateAction"
            ]
        }
    ],
    [
        "performingartstheater",
        {
            _name: "PerformingArtsTheater",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "employeraggregaterating",
        {
            _name: "EmployerAggregateRating",
            _parent: [
                "AggregateRating"
            ]
        }
    ],
    [
        "city",
        {
            _name: "City",
            _parent: [
                "AdministrativeArea"
            ]
        }
    ],
    [
        "adultentertainment",
        {
            _name: "AdultEntertainment",
            _parent: [
                "EntertainmentBusiness"
            ]
        }
    ],
    [
        "vitalsign",
        {
            _name: "VitalSign",
            _parent: [
                "MedicalSign"
            ]
        }
    ],
    [
        "scheduleaction",
        {
            _name: "ScheduleAction",
            _parent: [
                "PlanAction"
            ]
        }
    ],
    [
        "arriveaction",
        {
            _name: "ArriveAction",
            _parent: [
                "MoveAction"
            ]
        }
    ],
    [
        "musicevent",
        {
            _name: "MusicEvent",
            _parent: [
                "Event"
            ]
        }
    ],
    [
        "hairsalon",
        {
            _name: "HairSalon",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "dayspa",
        {
            _name: "DaySpa",
            _parent: [
                "HealthAndBeautyBusiness"
            ]
        }
    ],
    [
        "discoveraction",
        {
            _name: "DiscoverAction",
            _parent: [
                "FindAction"
            ]
        }
    ],
    [
        "endorsementrating",
        {
            _name: "EndorsementRating",
            _parent: [
                "Rating"
            ]
        }
    ],
    [
        "elementaryschool",
        {
            _name: "ElementarySchool",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "activateaction",
        {
            _name: "ActivateAction",
            _parent: [
                "ControlAction"
            ]
        }
    ],
    [
        "radioepisode",
        {
            _name: "RadioEpisode",
            _parent: [
                "Episode"
            ]
        }
    ],
    [
        "tieaction",
        {
            _name: "TieAction",
            _parent: [
                "AchieveAction"
            ]
        }
    ],
    [
        "dislikeaction",
        {
            _name: "DislikeAction",
            _parent: [
                "ReactAction"
            ]
        }
    ],
    [
        "faqpage",
        {
            _name: "FAQPage",
            _parent: [
                "WebPage"
            ]
        }
    ],
    [
        "winery",
        {
            _name: "Winery",
            _parent: [
                "FoodEstablishment"
            ]
        }
    ],
    [
        "diagnosticprocedure",
        {
            _name: "DiagnosticProcedure",
            _parent: [
                "MedicalProcedure"
            ]
        }
    ],
    [
        "riverbodyofwater",
        {
            _name: "RiverBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "newspaper",
        {
            _name: "Newspaper",
            _parent: [
                "Periodical"
            ]
        }
    ],
    [
        "meetingroom",
        {
            _name: "MeetingRoom",
            _parent: [
                "Room"
            ]
        }
    ],
    [
        "eventvenue",
        {
            _name: "EventVenue",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "movieclip",
        {
            _name: "MovieClip",
            _parent: [
                "Clip"
            ]
        }
    ],
    [
        "hvacbusiness",
        {
            _name: "HVACBusiness",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "taxistand",
        {
            _name: "TaxiStand",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "medicalriskcalculator",
        {
            _name: "MedicalRiskCalculator",
            _parent: [
                "MedicalRiskEstimator"
            ]
        }
    ],
    [
        "locksmith",
        {
            _name: "Locksmith",
            _parent: [
                "HomeAndConstructionBusiness"
            ]
        }
    ],
    [
        "trainreservation",
        {
            _name: "TrainReservation",
            _parent: [
                "Reservation"
            ]
        }
    ],
    [
        "musicvenue",
        {
            _name: "MusicVenue",
            _parent: [
                "CivicStructure"
            ]
        }
    ],
    [
        "oceanbodyofwater",
        {
            _name: "OceanBodyOfWater",
            _parent: [
                "BodyOfWater"
            ]
        }
    ],
    [
        "spreadsheetdigitaldocument",
        {
            _name: "SpreadsheetDigitalDocument",
            _parent: [
                "DigitalDocument"
            ]
        }
    ],
    [
        "motorcycle",
        {
            _name: "Motorcycle",
            _parent: [
                "Vehicle"
            ]
        }
    ],
    [
        "collegeoruniversity",
        {
            _name: "CollegeOrUniversity",
            _parent: [
                "EducationalOrganization"
            ]
        }
    ],
    [
        "qualitativevalue",
        {
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
