const pvpWorldGenDefinition = {
    base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {
        filterManager.AppendFilter(["center", "pvp"], 1)

        //? ------------ HQs -------------
        filterManager.AppendFilter(["pvp_team_blue_hq", "base_pvp"], 1)
        filterManager.AppendFilter(["pvp_team_red_hq", "base_pvp"], 1)

        //? ------------ Hill -------------

        //? ------------ BIOMES -------------

        // Any filter defined here must also be in placements_pvp.json, but the reverse doesn't need to be true
        const forest = ["biome", "forest", "wood", "iron", "coal", "large"]
        const jungle = ["biome", "jungle", "wood", "mob_alliance_biome", "redstone", "large"]
        const wetlands = ["biome", "wetlands", "wood", "redstone", "large"]
        const grasslands = ["biome", "grasslands", "plains", "iron", "coal", "large"]
        const frostlands = ["biome", "frostlands", "plains", "diamond", "mob_alliance_biome", "large"]
        const drylands = ["biome", "drylands", "plains", "big", "iron", "large"]
        const brokenlands = ["biome", "brokenlands", "elevated", "mob_alliance_biome", "coal", "large"]
        const mountains = ["biome", "mountains", "elevated", "diamond", "large"]
        const fatelands = ["pvp", "biome", "fate", "elevated", "stone", "large"]
        const smallDrylands = ["biome", "drylands", "plains", "small", "iron"]
        const smallFrostlands = ["pvp", "biome", "frostlands", "plains", "mob_alliance_biome", "small", "diamond"]
        const smallWetlands = ["biome", "wetlands", "wood", "small", "redstone"]
        const smallForest = ["biome", "forest", "wood", "small", "iron", "coal"]
        const smallGrasslands = ["biome", "grasslands", "plains", "small", "iron", "coal"]
        const smallFatelands = ["pvp", "biome", "fate", "elevated", "stone", "small"]

        const woodBiomes = [forest, jungle, wetlands]
        const stoneBiomes = [fatelands]
        const ironBiomes = [grasslands, forest, drylands]
        const drylandsBiome = [drylands]
        const coalBiomes = [brokenlands, grasslands, forest]
        const brokenlandsBiome = [brokenlands]
        const grasslandsBiome = [grasslands]
        const forestBiome = [forest]
        const diamondBiomes = [frostlands, mountains]
        const frostlandsBiome = [frostlands]
        const mountainsBiome = [mountains]
        const redstoneBiomes = [jungle, wetlands]
        const jungleBiome = [jungle]
        const wetlandsBiome = [wetlands]
        const smallIronBiomes = [smallGrasslands, smallForest, smallDrylands]
        const smallCoalBiomes = [smallGrasslands, smallForest]
        const smallDiamondBiomes = [smallFrostlands]
        const smallRedstoneBiomes = [smallWetlands]
        const smallStoneBiomes = [smallFatelands]

        // // Adds a biome.
        // const addSingleBiome = (biome, amount) => {
        //     filterManager.AppendFilter(biome, amount)
        // }

        // // Adds a single biome from an array, choosing a random amount within the provided range
        // const addBiomeFomarray = (biomes, amount) => {
        //     amount = Array.isArray(amount) ? RandomIntFromInterval(amount[0], amount[1] + 1) : amount
        //     if (amount > 0) {
        //         filterManager.AppendFilter(biomes[Math.floor(RandomFloat() * biomes.length)], amount)
        //     }
        // }

        //? ------------ BIOMES -------------
        // Here you add all the biomes.

        // addBiome(fatelands, 1)

        //? ------------ PIGLIN OUTPOSTS -------------
        PiglinPVPData.numOutposts = 0
        filterManager.AppendFilter(["outpost_slot"], PiglinPVPData.numOutposts)

        // // Adds all biomes from an array, each with a random amount within the provided range
        // // Max range is inclusive, unlike RandomIntFromInterval
        // const addBiomes = (biomes, amountForEach) => {
        //     biomes.forEach((biome) => {
        //         const amount = Array.isArray(amountForEach) ? RandomIntFromInterval(amountForEach[0], amountForEach[1] + 1) : amountForEach
        //         if (amount > 0) {
        //             filterManager.AppendFilter(biome, amount)
        //         }
        //     })
        // }

        // addBiomes(stoneBiomes, [1, 2])
        // if (filterManager.GetFilterCount(["stone"]) === 1) {
        //     if (RandomIntFromInterval(0, 2) === 1) {
        //         addBiome(smallStoneBiomes, [5, 10])
        //     } else {
        //         addBiomes(stoneBiomes, 2)
        //     }
        // }

        // addBiomes(woodBiomes, [0, 1])
        // // Make sure we have at least 1 wood biome
        // if (filterManager.GetFilterCount(["wood"]) === 0) {
        //     addBiome(woodBiomes, 1)
        // }

        // addBiomes(ironBiomes, [0, 1])
        // if (filterManager.GetFilterCount(["iron"]) === 0) {
        //     if (RandomIntFromInterval(0, 2) === 1) {
        //         addBiome(grasslandsBiome, 1)
        //         addBiome(forestBiome, 1)
        //         addBiome(drylandsBiome, 1)
        //         addBiome(smallIronBiomes, [3, 8])
        //     } else {
        //         addBiomes(ironBiomes, 1)
        //     }
        // }
        // addBiomes(coalBiomes, [0, 1])
        // if (filterManager.GetFilterCount(["coal"]) === 0) {
        //     if (RandomIntFromInterval(0, 2) === 1) {
        //         addBiome(brokenlandsBiome, 1)
        //         addBiome(grasslandsBiome, 1)
        //         addBiome(forestBiome, 1)
        //         addBiome(smallCoalBiomes, [3, 8])
        //     } else {
        //         addBiomes(coalBiomes, 1)
        //     }
        // }
        // addBiomes(diamondBiomes, [0, 1])
        // if (filterManager.GetFilterCount(["diamond"]) === 0) {
        //     if (RandomIntFromInterval(0, 2) === 1) {
        //         addBiome(frostlandsBiome, 1)
        //         addBiome(mountainsBiome, 1)
        //         addBiome(smallDiamondBiomes, [3, 8])
        //     } else {
        //         addBiomes(diamondBiomes, 1)
        //     }
        // }
        // addBiomes(redstoneBiomes, [0, 1])
        // if (filterManager.GetFilterCount(["redstone"]) === 0) {
        //     if (RandomIntFromInterval(0, 2) === 1) {
        //         addBiome(wetlandsBiome, 1)
        //         addBiome(jungleBiome, 1)
        //         addBiome(smallRedstoneBiomes, [3, 8])
        //     } else {
        //         addBiomes(redstoneBiomes, 1)
        //     }
        // }
        /* 
                // If the world has too few biomes, then add extra small biomes as "stepping stones"
                if (filterManager.GetFilterCount(["biome"]) <= 5) {
                    addBiome(Biomes, [0, 1])
                    if (filterManager.GetFilterCount(["biome"]) <= 5) {
                        addBiome(Biomes, 1)
                    }
                    addBiome(smallBiomes, [0, 2])
        
                    if (filterManager.GetFilterCount(["small"]) <= 1) {
                        addBiome(smallBiomes, 1)
                    }
                    addBiomes(plainBiomes, [0, 1])
                    // If we have every plain biome, add even more
                    if (filterManager.GetFilterCount(["plains"]) >= plainBiomes.length) {
                        addBiomes(plainBiomes, [0, 1])
                    }
        
                    addBiomes(elevatedBiomes, [0, 1])
                    // If we have every elevated biome, add even more
                    if (filterManager.GetFilterCount(["elevated"]) >= elevatedBiomes.length) {
                        addBiomes(elevatedBiomes, [0, 1])
                    }
                } */
    }
}

SNIPPET_InheritsFromGameMode("hill_game", () => {
    SetWorldGenDefinition(pvpWorldGenDefinition)
})