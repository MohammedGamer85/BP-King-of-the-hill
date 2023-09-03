const pvpWorldGenDefinition = {
    base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {

        // Adds a biome.
        const addSingleBiome = (Ibiome, Iamount) => {
            filterManager.AppendFilter(Ibiome, Iamount)
        }

        addSingleBiome(["center", "pvp"], 1)

        //? ------------ HQs -------------
        addSingleBiome(["pvp_team_blue_hq", "base_pvp"], 1)
        addSingleBiome(["pvp_team_red_hq", "base_pvp"], 1)

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

        //? ------------ BIOMES -------------

        //you can add other biomes here.

        //? ------------ PIGLIN OUTPOSTS -------------
        PiglinPVPData.numOutposts = 0
        addSingleBiome(["outpost_slot"], PiglinPVPData.numOutposts)
    }
}

SNIPPET_InheritsFromGameMode("hill_game", () => {
    SetWorldGenDefinition(pvpWorldGenDefinition)
})


