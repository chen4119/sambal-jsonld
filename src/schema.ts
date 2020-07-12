export const schemaMap = new Map([
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
                "CreativeWork",
                "URL"
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
                "Event",
                "CreativeWork"
            ],
            url: [
                "URL"
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
                "AdministrativeArea",
                "Place",
                "GeoShape"
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
                "Text",
                "Place",
                "PostalAddress"
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
                "Organization",
                "ProgramMembership"
            ],
            naics: [
                "Text"
            ],
            numberOfEmployees: [
                "QuantitativeValue"
            ],
            owns: [
                "Product",
                "OwnershipInfo"
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
                "Person",
                "Organization"
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
        "enumeration",
        {
            _id: "Enumeration",
            _name: "Enumeration",
            _parent: [
                "Intangible"
            ],
            supersededBy: [
                "Enumeration",
                "Class",
                "Property"
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
                "URL",
                "Person"
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
                "Distance",
                "QuantitativeValue"
            ],
            homeLocation: [
                "Place",
                "ContactPoint"
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
                "Organization",
                "ProgramMembership"
            ],
            naics: [
                "Text"
            ],
            nationality: [
                "Country"
            ],
            netWorth: [
                "MonetaryAmount",
                "PriceSpecification"
            ],
            owns: [
                "Product",
                "OwnershipInfo"
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
                "Person",
                "Organization"
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
                "GeoShape",
                "GeoCoordinates"
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
                "Photograph",
                "ImageObject"
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
                "Text",
                "MedicalEnumeration",
                "DrugLegalStatus"
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
                "Text",
                "Integer"
            ],
            pageStart: [
                "Integer",
                "Text"
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
                "MusicRecording",
                "AudioObject",
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
                "Person",
                "Organization"
            ],
            copyrightHolder: [
                "Person",
                "Organization"
            ],
            copyrightYear: [
                "Number"
            ],
            creator: [
                "Organization",
                "Person"
            ],
            dateCreated: [
                "Date",
                "DateTime"
            ],
            dateModified: [
                "Date",
                "DateTime"
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
                "Text",
                "URL"
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
                "CreativeWork",
                "URL",
                "Product"
            ],
            isFamilyFriendly: [
                "Boolean"
            ],
            isPartOf: [
                "CreativeWork",
                "URL"
            ],
            keywords: [
                "Text"
            ],
            learningResourceType: [
                "Text"
            ],
            license: [
                "CreativeWork",
                "URL"
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
                "Offer",
                "Demand"
            ],
            position: [
                "Text",
                "Integer"
            ],
            producer: [
                "Person",
                "Organization"
            ],
            provider: [
                "Person",
                "Organization"
            ],
            publication: [
                "PublicationEvent"
            ],
            publisher: [
                "Person",
                "Organization"
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
                "Text",
                "URL"
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
                "Person",
                "Organization"
            ],
            temporal: [
                "Text",
                "DateTime"
            ],
            temporalCoverage: [
                "URL",
                "Text",
                "DateTime"
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
                "Number",
                "Text"
            ],
            video: [
                "VideoObject",
                "Clip"
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
                "BroadcastFrequencySpecification",
                "Text"
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
                "AdministrativeArea",
                "Place",
                "GeoShape"
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
                "Person",
                "Organization"
            ],
            category: [
                "Text",
                "PhysicalActivityCategory",
                "Thing",
                "URL"
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
                "Product",
                "Service"
            ],
            logo: [
                "URL",
                "ImageObject"
            ],
            offers: [
                "Offer",
                "Demand"
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
                "Organization",
                "Person"
            ],
            audience: [
                "Audience"
            ],
            composer: [
                "Organization",
                "Person"
            ],
            contributor: [
                "Person",
                "Organization"
            ],
            director: [
                "Person"
            ],
            doorTime: [
                "DateTime",
                "Time"
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
                "Text",
                "Place",
                "PostalAddress"
            ],
            maximumAttendeeCapacity: [
                "Integer"
            ],
            offers: [
                "Offer",
                "Demand"
            ],
            organizer: [
                "Organization",
                "Person"
            ],
            performer: [
                "Person",
                "Organization"
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
                "Person",
                "Organization"
            ],
            startDate: [
                "DateTime",
                "Date"
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
                "Text",
                "Integer"
            ],
            startDate: [
                "DateTime",
                "Date"
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
                "MusicGroup",
                "Person"
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
                "MusicGroup",
                "Person"
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
        "tvseries",
        {
            _id: "TVSeries",
            _name: "TVSeries",
            _parent: [
                "CreativeWorkSeries",
                "CreativeWork"
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
                "MusicGroup",
                "Person"
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
                "CreativeWork",
                "Series"
            ],
            endDate: [
                "Date",
                "DateTime"
            ],
            issn: [
                "Text"
            ],
            startDate: [
                "DateTime",
                "Date"
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
                "Duration",
                "Text"
            ],
            flightDistance: [
                "Distance",
                "Text"
            ],
            flightNumber: [
                "Text"
            ],
            mealService: [
                "Text"
            ],
            seller: [
                "Organization",
                "Person"
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
                "DateTime",
                "Time"
            ],
            departureTime: [
                "DateTime",
                "Time"
            ],
            offers: [
                "Offer",
                "Demand"
            ],
            provider: [
                "Person",
                "Organization"
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
                "Person",
                "Organization"
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
                "PriceSpecification",
                "Number",
                "Text"
            ],
            underName: [
                "Organization",
                "Person"
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
                "Person",
                "Organization"
            ],
            category: [
                "Text",
                "PhysicalActivityCategory",
                "Thing",
                "URL"
            ],
            confirmationNumber: [
                "Text"
            ],
            customer: [
                "Organization",
                "Person"
            ],
            minimumPaymentDue: [
                "PriceSpecification",
                "MonetaryAmount"
            ],
            paymentDueDate: [
                "Date",
                "DateTime"
            ],
            paymentMethod: [
                "PaymentMethod"
            ],
            paymentMethodId: [
                "Text"
            ],
            paymentStatus: [
                "Text",
                "PaymentStatusType"
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
                "MonetaryAmount",
                "PriceSpecification"
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
                "Text",
                "MedicalEntity"
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
                "QualitativeValue",
                "Text"
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
                "Text",
                "QualitativeValue",
                "URL"
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
                "QuantitativeValue",
                "Number"
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
                "QuantitativeValue",
                "Number"
            ],
            speed: [
                "QuantitativeValue"
            ],
            steeringPosition: [
                "SteeringPositionValue"
            ],
            stupidProperty: [
                "QuantitativeValue"
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
                "CarUsageType",
                "Text"
            ],
            vehicleTransmission: [
                "QualitativeValue",
                "Text",
                "URL"
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
                "Text",
                "PhysicalActivityCategory",
                "Thing",
                "URL"
            ],
            color: [
                "Text"
            ],
            depth: [
                "QuantitativeValue",
                "Distance"
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
            height: [
                "Distance",
                "QuantitativeValue"
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
                "Product",
                "Service"
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
                "Offer",
                "Demand"
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
                "Person",
                "Organization"
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
                "Date",
                "DateTime"
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
                "Organization",
                "Person"
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
                "Text",
                "ComputerLanguage"
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
                "Offer",
                "Demand"
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
        "medicalcondition",
        {
            _id: "MedicalCondition",
            _name: "MedicalCondition",
            _parent: [
                "MedicalEntity"
            ],
            associatedAnatomy: [
                "SuperficialAnatomy",
                "AnatomicalSystem",
                "AnatomicalStructure"
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
                "Text",
                "MedicalEnumeration",
                "DrugLegalStatus"
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
                "Text",
                "DrugPrescriptionStatus"
            ],
            proprietaryName: [
                "Text"
            ],
            relatedDrug: [
                "Drug"
            ],
            warning: [
                "URL",
                "Text"
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
                "DateTime",
                "Time"
            ],
            error: [
                "Thing"
            ],
            instrument: [
                "Thing"
            ],
            location: [
                "Text",
                "Place",
                "PostalAddress"
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
                "Time",
                "DateTime"
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
                "Person",
                "Organization"
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
                "AdministrativeArea",
                "Place",
                "GeoShape"
            ],
            eligibleRegion: [
                "Place",
                "Text",
                "GeoShape"
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
                "Text",
                "Number"
            ],
            priceCurrency: [
                "Text"
            ],
            validFrom: [
                "Date",
                "DateTime"
            ],
            validThrough: [
                "DateTime",
                "Date"
            ],
            valueAddedTaxIncluded: [
                "Boolean"
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
                "Date",
                "DateTime"
            ],
            validThrough: [
                "DateTime",
                "Date"
            ],
            value: [
                "Number",
                "Text",
                "StructuredValue",
                "Boolean"
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
                "DateTime",
                "Time"
            ],
            height: [
                "Distance",
                "QuantitativeValue"
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
                "Boolean",
                "MediaSubscription"
            ],
            startTime: [
                "Time",
                "DateTime"
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
        "foodestablishmentreservation",
        {
            _id: "FoodEstablishmentReservation",
            _name: "FoodEstablishmentReservation",
            _parent: [
                "Reservation"
            ],
            endTime: [
                "DateTime",
                "Time"
            ],
            partySize: [
                "QuantitativeValue",
                "Integer"
            ],
            startTime: [
                "Time",
                "DateTime"
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
                "MusicGroup",
                "Person"
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
                "AdministrativeArea",
                "Place",
                "GeoShape"
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
                "Text",
                "Product"
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
        "lodgingreservation",
        {
            _id: "LodgingReservation",
            _name: "LodgingReservation",
            _parent: [
                "Reservation"
            ],
            checkinTime: [
                "Time",
                "DateTime"
            ],
            checkoutTime: [
                "Time",
                "DateTime"
            ],
            lodgingUnitDescription: [
                "Text"
            ],
            lodgingUnitType: [
                "Text",
                "QualitativeValue"
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
                "URL",
                "Text"
            ],
            unitText: [
                "Text"
            ],
            value: [
                "Number",
                "Text",
                "StructuredValue",
                "Boolean"
            ],
            valueReference: [
                "StructuredValue",
                "Enumeration",
                "QualitativeValue",
                "PropertyValue",
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
                "Text",
                "Integer"
            ],
            pageStart: [
                "Integer",
                "Text"
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
        "visualartwork",
        {
            _id: "VisualArtwork",
            _name: "VisualArtwork",
            _parent: [
                "CreativeWork"
            ],
            artEdition: [
                "Integer",
                "Text"
            ],
            artform: [
                "Text",
                "URL"
            ],
            artist: [
                "Person"
            ],
            artMedium: [
                "Text",
                "URL"
            ],
            artworkSurface: [
                "URL",
                "Text"
            ],
            colorist: [
                "Person"
            ],
            depth: [
                "QuantitativeValue",
                "Distance"
            ],
            height: [
                "Distance",
                "QuantitativeValue"
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
                "Date",
                "DateTime"
            ],
            validThrough: [
                "DateTime",
                "Date"
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
                "URL",
                "Text"
            ],
            unitText: [
                "Text"
            ],
            value: [
                "Number",
                "Text",
                "StructuredValue",
                "Boolean"
            ],
            valueReference: [
                "StructuredValue",
                "Enumeration",
                "QualitativeValue",
                "PropertyValue",
                "QuantitativeValue"
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
                "Date",
                "DateTime"
            ],
            validThrough: [
                "DateTime",
                "Date"
            ]
        }
    ],
    [
        "property",
        {
            _id: "Property",
            _name: "Property",
            _parent: [
                "Intangible"
            ],
            domainIncludes: [
                "Class"
            ],
            inverseOf: [
                "Property"
            ],
            rangeIncludes: [
                "Class"
            ],
            supersededBy: [
                "Enumeration",
                "Class",
                "Property"
            ]
        }
    ],
    [
        "class",
        {
            _id: "Class",
            _name: "Class",
            _parent: [
                "Intangible"
            ],
            supersededBy: [
                "Enumeration",
                "Class",
                "Property"
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
            isAccessibleForFree: [
                "Boolean"
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
        "softwareapplication",
        {
            _id: "SoftwareApplication",
            _name: "SoftwareApplication",
            _parent: [
                "CreativeWork"
            ],
            applicationCategory: [
                "Text",
                "URL"
            ],
            applicationSubCategory: [
                "Text",
                "URL"
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
                "Text",
                "URL"
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
                "URL",
                "Text"
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
                "Text",
                "URL"
            ],
            supportingData: [
                "DataFeed"
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
                "DateTime",
                "Date",
                "Time"
            ],
            availabilityStarts: [
                "DateTime",
                "Date",
                "Time"
            ],
            category: [
                "Text",
                "PhysicalActivityCategory",
                "Thing",
                "URL"
            ],
            eligibleRegion: [
                "Place",
                "Text",
                "GeoShape"
            ],
            expectsAcceptanceOf: [
                "Offer"
            ],
            requiresSubscription: [
                "Boolean",
                "MediaSubscription"
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
                "QuantitativeValue",
                "Number"
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
                "MusicGroup",
                "Person"
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
        "hotelroom",
        {
            _id: "HotelRoom",
            _name: "HotelRoom",
            _parent: [
                "Room"
            ],
            bed: [
                "BedType",
                "BedDetails",
                "Text"
            ],
            occupancy: [
                "QuantitativeValue"
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
                "QuantitativeValue",
                "Number"
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
                "URL",
                "Menu",
                "Text"
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
        "message",
        {
            _id: "Message",
            _name: "Message",
            _parent: [
                "CreativeWork"
            ],
            bccRecipient: [
                "ContactPoint",
                "Person",
                "Organization"
            ],
            ccRecipient: [
                "ContactPoint",
                "Person",
                "Organization"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
            ],
            sender: [
                "Organization",
                "Audience",
                "Person"
            ],
            toRecipient: [
                "Person",
                "Organization",
                "Audience",
                "ContactPoint"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
        "tipaction",
        {
            _id: "TipAction",
            _name: "TipAction",
            _parent: [
                "TradeAction"
            ],
            recipient: [
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "Text",
                "Number"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "Person",
                "Organization",
                "ContactPoint",
                "Audience"
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
                "QualitativeValue",
                "URL"
            ],
            fuelType: [
                "Text",
                "QualitativeValue",
                "URL"
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
                "AdministrativeArea",
                "Place",
                "GeoShape"
            ],
            availability: [
                "ItemAvailability"
            ],
            availabilityEnds: [
                "DateTime",
                "Date",
                "Time"
            ],
            availabilityStarts: [
                "DateTime",
                "Date",
                "Time"
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
                "Text",
                "PhysicalActivityCategory",
                "Thing",
                "URL"
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
                "Place",
                "Text",
                "GeoShape"
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
                "Service",
                "Trip",
                "MenuItem",
                "Event",
                "CreativeWork",
                "Product",
                "AggregateOffer"
            ],
            mpn: [
                "Text"
            ],
            offeredBy: [
                "Person",
                "Organization"
            ],
            price: [
                "Text",
                "Number"
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
                "Organization",
                "Person"
            ],
            serialNumber: [
                "Text"
            ],
            sku: [
                "Text"
            ],
            validFrom: [
                "Date",
                "DateTime"
            ],
            validThrough: [
                "DateTime",
                "Date"
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
                "AdministrativeArea",
                "Place",
                "GeoShape"
            ],
            availability: [
                "ItemAvailability"
            ],
            availabilityEnds: [
                "DateTime",
                "Date",
                "Time"
            ],
            availabilityStarts: [
                "DateTime",
                "Date",
                "Time"
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
                "Place",
                "Text",
                "GeoShape"
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
                "Service",
                "Trip",
                "MenuItem",
                "Event",
                "CreativeWork",
                "Product",
                "AggregateOffer"
            ],
            mpn: [
                "Text"
            ],
            priceSpecification: [
                "PriceSpecification"
            ],
            seller: [
                "Organization",
                "Person"
            ],
            serialNumber: [
                "Text"
            ],
            sku: [
                "Text"
            ],
            validFrom: [
                "Date",
                "DateTime"
            ],
            validThrough: [
                "DateTime",
                "Date"
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
        "bustrip",
        {
            _id: "BusTrip",
            _name: "BusTrip",
            _parent: [
                "Trip"
            ],
            arrivalBusStop: [
                "BusStation",
                "BusStop"
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
                "Thing",
                "URL",
                "Text"
            ],
            gameServer: [
                "GameServer"
            ],
            gameTip: [
                "CreativeWork"
            ],
            musicBy: [
                "MusicGroup",
                "Person"
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
                "PostalAddress",
                "URL",
                "Place"
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
        "taxireservation",
        {
            _id: "TaxiReservation",
            _name: "TaxiReservation",
            _parent: [
                "Reservation"
            ],
            partySize: [
                "QuantitativeValue",
                "Integer"
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
                "CreativeWork"
            ],
            acceptedAnswer: [
                "ItemList",
                "Answer"
            ],
            answerCount: [
                "Integer"
            ],
            downvoteCount: [
                "Integer"
            ],
            suggestedAnswer: [
                "ItemList",
                "Answer"
            ],
            upvoteCount: [
                "Integer"
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
                "Thing",
                "Text",
                "ListItem"
            ],
            itemListOrder: [
                "Text",
                "ItemListOrderType"
            ],
            numberOfItems: [
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
                "Question"
            ],
            upvoteCount: [
                "Integer"
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
                "MonetaryAmount",
                "Number"
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
                "Text",
                "URL"
            ],
            interestRate: [
                "QuantitativeValue",
                "Number"
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
                "Number",
                "MonetaryAmount"
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
                "URL",
                "Text"
            ],
            startDate: [
                "DateTime",
                "Date"
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
                "Number",
                "MonetaryAmount"
            ],
            datePosted: [
                "Date",
                "DateTime"
            ],
            employmentType: [
                "Text"
            ],
            estimatedSalary: [
                "Number",
                "MonetaryAmountDistribution",
                "MonetaryAmount"
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
                "DateTime",
                "Date"
            ],
            workHours: [
                "Text"
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
                "Number",
                "Text"
            ],
            ratingValue: [
                "Text",
                "Number"
            ],
            reviewAspect: [
                "Text"
            ],
            worstRating: [
                "Text",
                "Number"
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
                "Text",
                "Thing"
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
        "movietheater",
        {
            _id: "MovieTheater",
            _name: "MovieTheater",
            _parent: [
                "CivicStructure",
                "EntertainmentBusiness"
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
        "educationalorganization",
        {
            _id: "EducationalOrganization",
            _name: "EducationalOrganization",
            _parent: [
                "CivicStructure",
                "Organization"
            ],
            alumni: [
                "Person"
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
                "ItemList",
                "Text",
                "CreativeWork"
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
                "Text",
                "HowToSection",
                "CreativeWork",
                "HowToStep"
            ],
            supply: [
                "Text",
                "HowToSupply"
            ],
            tool: [
                "Text",
                "HowToTool"
            ],
            totalTime: [
                "Duration"
            ],
            yield: [
                "Text",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "howtodirection",
        {
            _id: "HowToDirection",
            _name: "HowToDirection",
            _parent: [
                "ListItem",
                "CreativeWork"
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
                "URL",
                "MediaObject"
            ],
            performTime: [
                "Duration"
            ],
            prepTime: [
                "Duration"
            ],
            supply: [
                "Text",
                "HowToSupply"
            ],
            tool: [
                "Text",
                "HowToTool"
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
                "CivicStructure",
                "EmergencyService",
                "MedicalOrganization"
            ],
            availableService: [
                "MedicalTest",
                "MedicalTherapy",
                "MedicalProcedure"
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
            ],
            variablesMeasured: [
                "Text",
                "PropertyValue"
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
                "URL",
                "Text"
            ],
            unitText: [
                "Text"
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
                "Product",
                "Service"
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
                "Audience",
                "Person"
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
                "Person",
                "MusicGroup"
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
                "Person",
                "MusicGroup"
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
                "MusicRecording",
                "ItemList"
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
                "Text",
                "PropertyValue"
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
        "howtosection",
        {
            _id: "HowToSection",
            _name: "HowToSection",
            _parent: [
                "ListItem",
                "CreativeWork",
                "ItemList"
            ]
        }
    ],
    [
        "howtostep",
        {
            _id: "HowToStep",
            _name: "HowToStep",
            _parent: [
                "CreativeWork",
                "ListItem",
                "ItemList"
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
                "Organization",
                "Person"
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
                "Duration",
                "QualitativeValue"
            ],
            activityFrequency: [
                "QualitativeValue",
                "Text"
            ],
            additionalVariable: [
                "Text"
            ],
            exerciseType: [
                "Text"
            ],
            intensity: [
                "QualitativeValue",
                "Text"
            ],
            repetitions: [
                "QualitativeValue",
                "Number"
            ],
            restPeriods: [
                "Text",
                "QualitativeValue"
            ],
            workload: [
                "QualitativeValue",
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
                "AnatomicalSystem",
                "AnatomicalStructure"
            ],
            category: [
                "Text",
                "PhysicalActivityCategory",
                "Thing",
                "URL"
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
        "ticket",
        {
            _id: "Ticket",
            _name: "Ticket",
            _parent: [
                "Intangible"
            ],
            dateIssued: [
                "DateTime",
                "Date"
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
                "URL",
                "Text"
            ],
            totalPrice: [
                "PriceSpecification",
                "Number",
                "Text"
            ],
            underName: [
                "Organization",
                "Person"
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
                "MedicalTest",
                "MedicalTherapy",
                "MedicalProcedure"
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
                "Number",
                "Text"
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
                "Audience",
                "Text"
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
                "Text",
                "QualitativeValue"
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
                "Text",
                "MedicalEnumeration",
                "DrugLegalStatus"
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
                "MusicGroup",
                "Person"
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
                "PostalAddress",
                "URL",
                "Place"
            ],
            gamePlatform: [
                "Thing",
                "URL",
                "Text"
            ],
            musicBy: [
                "MusicGroup",
                "Person"
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
                "MusicGroup",
                "Person"
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
                "Text",
                "URL"
            ],
            track: [
                "MusicRecording",
                "ItemList"
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
                "Organization",
                "Person"
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
                "URL",
                "Text"
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
        "investmentordeposit",
        {
            _id: "InvestmentOrDeposit",
            _name: "InvestmentOrDeposit",
            _parent: [
                "FinancialProduct"
            ],
            amount: [
                "MonetaryAmount",
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
                "Text",
                "Number"
            ],
            lowPrice: [
                "Text",
                "Number"
            ],
            offerCount: [
                "Integer"
            ],
            offers: [
                "Offer",
                "Demand"
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
                "CreativeWork"
            ],
            courseCode: [
                "Text"
            ],
            coursePrerequisites: [
                "AlignmentObject",
                "Text",
                "Course"
            ],
            educationalCredentialAwarded: [
                "Text",
                "URL"
            ],
            hasCourseInstance: [
                "CourseInstance"
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
                "Time",
                "DateTime"
            ],
            checkoutTime: [
                "Time",
                "DateTime"
            ],
            numberOfRooms: [
                "QuantitativeValue",
                "Number"
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
                "Text",
                "Integer"
            ],
            pageStart: [
                "Integer",
                "Text"
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
                "Text",
                "Integer"
            ],
            pageStart: [
                "Integer",
                "Text"
            ],
            pagination: [
                "Text"
            ],
            volumeNumber: [
                "Text",
                "Integer"
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
        "dentist",
        {
            _id: "Dentist",
            _name: "Dentist",
            _parent: [
                "LocalBusiness",
                "MedicalOrganization",
                "MedicalBusiness"
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
                "Organization",
                "Person"
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
                "Text",
                "DataFeedItem",
                "Thing"
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
                "BroadcastFrequencySpecification",
                "Text"
            ],
            broadcastServiceTier: [
                "Text"
            ],
            genre: [
                "Text",
                "URL"
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
                "Number",
                "MonetaryAmountDistribution",
                "MonetaryAmount"
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
                "SuperficialAnatomy",
                "AnatomicalStructure"
            ],
            sourcedFrom: [
                "BrainStructure"
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
                "Person",
                "SportsTeam"
            ],
            competitor: [
                "Person",
                "SportsTeam"
            ],
            homeTeam: [
                "SportsTeam",
                "Person"
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
                "Person",
                "Organization"
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
                "Number",
                "Text"
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
                "Date",
                "DateTime"
            ],
            item: [
                "Thing"
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
                "MedicalOrganization",
                "MedicalBusiness"
            ],
            availableService: [
                "MedicalTest",
                "MedicalTherapy",
                "MedicalProcedure"
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
                "Text",
                "BedType"
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
                "Product",
                "Service"
            ],
            unitCode: [
                "URL",
                "Text"
            ],
            unitText: [
                "Text"
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
                "Date",
                "DateTime"
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
        "medicalwebpage",
        {
            _id: "MedicalWebPage",
            _name: "MedicalWebPage",
            _parent: [
                "WebPage"
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
        "financialservice",
        {
            _id: "FinancialService",
            _name: "FinancialService",
            _parent: [
                "LocalBusiness"
            ],
            feesAndCommissionsSpecification: [
                "Text",
                "URL"
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
                "AutomotiveBusiness",
                "Store"
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
        "suite",
        {
            _id: "Suite",
            _name: "Suite",
            _parent: [
                "Accommodation"
            ],
            bed: [
                "BedType",
                "BedDetails",
                "Text"
            ],
            numberOfRooms: [
                "QuantitativeValue",
                "Number"
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
                "QuantitativeValue",
                "Number"
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
                "QuantitativeValue",
                "Number"
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
                "QuantitativeValue",
                "Number"
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
                "Person",
                "ContactPoint",
                "Organization",
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
                "CategoryCode",
                "MedicalIntangible"
            ],
            codingSystem: [
                "Text"
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
                "Number",
                "Text",
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
        "audiobook",
        {
            _id: "Audiobook",
            _name: "Audiobook",
            _parent: [
                "AudioObject",
                "Book"
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
        "stupidtype",
        {
            _id: "StupidType",
            _name: "StupidType",
            _parent: [
                "Thing"
            ],
            stupidProperty: [
                "QuantitativeValue"
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
                "LodgingBusiness",
                "CivicStructure"
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
        "stadiumorarena",
        {
            _id: "StadiumOrArena",
            _name: "StadiumOrArena",
            _parent: [
                "SportsActivityLocation",
                "CivicStructure"
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
                "Text",
                "QualitativeValue"
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
        "drugcost",
        {
            _id: "DrugCost",
            _name: "DrugCost",
            _parent: [
                "MedicalEnumeration"
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
        "patient",
        {
            _id: "Patient",
            _name: "Patient",
            _parent: [
                "Person",
                "MedicalAudience"
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
        "drugclass",
        {
            _id: "DrugClass",
            _name: "DrugClass",
            _parent: [
                "MedicalEnumeration"
            ],
            drug: [
                "Drug"
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
                "StructuredValue",
                "Enumeration",
                "QualitativeValue",
                "PropertyValue",
                "QuantitativeValue"
            ]
        }
    ],
    [
        "drugcost",
        {
            _values: []
        }
    ],
    [
        "medicalenumeration",
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
        "patient",
        {
            _values: []
        }
    ],
    [
        "medicalaudience",
        {
            _values: [
                "MedicalResearcher",
                "Clinician"
            ]
        }
    ],
    [
        "drugclass",
        {
            _values: []
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
                "CohortStudy",
                "CrossSectional",
                "CaseSeries",
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
                "Head",
                "Genitourinary",
                "MusculoskeletalExam",
                "Neuro",
                "CardiovascularExam",
                "Eye",
                "Abdomen",
                "Appearance"
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
                "FDAcategoryX",
                "FDAnotEvaluated",
                "FDAcategoryB",
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
                "VeganDiet",
                "VegetarianDiet",
                "KosherDiet",
                "DiabeticDiet",
                "LowSaltDiet",
                "LowFatDiet",
                "LowLactoseDiet",
                "HalalDiet",
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
        "businessfunction",
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
        "medicalstudystatus",
        {
            _values: [
                "Terminated",
                "ActiveNotRecruiting",
                "Withdrawn",
                "EnrollingByInvitation",
                "NotYetRecruiting",
                "Recruiting",
                "ResultsNotAvailable",
                "Completed",
                "ResultsAvailable",
                "Suspended"
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
                "Podiatric",
                "Urologic",
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
                "Midwifery",
                "Oncologic",
                "Renal",
                "PlasticSurgery",
                "LaboratoryScience",
                "Obstetric",
                "Otolaryngologic",
                "Endocrine",
                "Pathology",
                "Infectious",
                "Optometric",
                "Pediatric"
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
        "steeringpositionvalue",
        {
            _values: [
                "RightHandDriving",
                "LeftHandDriving"
            ]
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
        "parcelservice",
        {
            _values: []
        }
    ],
    [
        "deliverymethod",
        {
            _values: [
                "OnSitePickup"
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
                "EventRescheduled",
                "EventPostponed",
                "EventMovedOnline",
                "EventScheduled",
                "EventCancelled"
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
                "SoundtrackAlbum",
                "RemixAlbum",
                "LiveAlbum",
                "DJMixAlbum",
                "MixtapeAlbum",
                "StudioAlbum",
                "CompilationAlbum"
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
                "DigitalFormat",
                "CDFormat"
            ]
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
        "dayofweek",
        {
            _values: [
                "Wednesday",
                "PublicHolidays",
                "Monday",
                "Friday",
                "Sunday",
                "Saturday",
                "Thursday",
                "Tuesday"
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
        "lockerdelivery",
        {
            _values: []
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
    ],
    [
        "warrantyscope",
        {
            _values: []
        }
    ]
]);
