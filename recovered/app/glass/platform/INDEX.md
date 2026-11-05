# Glass platform (p2) index

Cluster: p2-platform — 131 modules, all emitted flat because no nls/webpack-key evidence yields a source path.

| group | count |
|---|---|
| editor-plugins-third-party | 15 |
| marketplace-plugins | 34 |
| model | 30 |
| provider | 1 |
| settings | 5 |
| team | 1 |
| team-marketplace | 7 |
| third-party-build-mjs | 4 |
| third-party-statsig | 20 |
| unclassified | 3 |
| usage-billing | 11 |

Renames (20) are recorded in scripts/recover/glass/p2-platform/maps/ and applied only through scripts/recover/rename/apply-map.ts with AST equivalence checks.

| module | moduleId | group | parseable | renamed |
|---|---|---|---|---|
| $_StatsigGlobal.js | 0274 | third-party-statsig | no (truncated) |  |
| AddPlugin.js | 3964 | marketplace-plugins | yes |  |
| AddPluginBanner.js | 2820 | marketplace-plugins | no (truncated) |  |
| AddPluginContent.js | 2866 | marketplace-plugins | yes |  |
| AddPluginSearch.js | 2823 | marketplace-plugins | no (truncated) |  |
| AddPluginsToMarketplaceMenu.js | 2826 | marketplace-plugins | yes | yes |
| AddTeamMarketplaceModal.js | 2831 | team-marketplace | no (truncated) |  |
| BillingStatusBanner.js | 5104 | usage-billing | no (truncated) |  |
| BillingStatusBanner.react.js | 5103 | usage-billing | no (truncated) |  |
| CachedNodeViewPlugin.js | 3149 | editor-plugins-third-party | no (truncated) |  |
| CacheKey.js | 0278 | third-party-statsig | no (truncated) |  |
| ClassicModelNudgeNotice.react.js | 5105 | model | no (truncated) |  |
| ClassicUsageNoticeTray.react.js | 5106 | usage-billing | no (truncated) |  |
| ClassicUsageNoticeTrays.js | 5107 | usage-billing | no (truncated) |  |
| CodeBlockHighlightPlugin.js | 3156 | marketplace-plugins | no (truncated) |  |
| CodeTokenizerProvider.js | 1943 | editor-plugins-third-party | no (truncated) |  |
| ColorTokensSection.js | 7728 | settings | no (truncated) |  |
| CompactModelFlyoutRows.js | 2803 | model | yes |  |
| CompactModelPickerContent.js | 2807 | model | yes |  |
| ConfigurePluginDialog.js | 3965 | marketplace-plugins | no (truncated) |  |
| ContextUsageTray.react.js | 5289 | usage-billing | no (truncated) |  |
| CreateTeamMarketplaceForm.js | 2828 | team-marketplace | no (truncated) |  |
| DocumentRhythmExtension.js | 3174 | editor-plugins-third-party | yes |  |
| DOMKeyframesResolver.mjs | 6918 | third-party-build-mjs | yes |  |
| DownloadConfigSpecsResponse.js | 0294 | third-party-statsig | no (truncated) |  |
| EditorHistoryOwnerExtension.js | 3183 | editor-plugins-third-party | yes |  |
| Feature.mjs | 6944 | third-party-build-mjs | yes |  |
| HoverModelItem.js | 2746 | model | yes |  |
| ImagePlugins.js | 4883 | marketplace-plugins | no (truncated) |  |
| ImportTeamMarketplaceFromRepoForm.js | 2830 | team-marketplace | yes | yes |
| InlineCodeLinkPlugin.js | 3154 | editor-plugins-third-party | no (truncated) |  |
| KeybindingRecorder.js | 5111 | settings | no (truncated) |  |
| KeybindingRecorderSection.js | 7770 | settings | no (truncated) |  |
| KeyboardShortcutButton.js | 5112 | unclassified | no (truncated) |  |
| KeyframesResolver.mjs | 6861 | third-party-build-mjs | no (truncated) |  |
| LabelableProvider.js | 2114 | provider | yes |  |
| LeadingContentExtension.js | 2925 | editor-plugins-third-party | no (truncated) |  |
| LegacyModelItem.js | 2747 | model | yes | yes |
| LineCodeBlockTokenizer.js | 3195 | editor-plugins-third-party | yes |  |
| LinkDecoratorPlugin.js | 3168 | editor-plugins-third-party | no (truncated) |  |
| LockedModelPicker.react.js | 5136 | model | yes | yes |
| ManageTeamMarketplaceAddPicker.js | 2848 | team-marketplace | no (truncated) |  |
| ManageTeamMarketplaceModal.js | 2864 | team-marketplace | yes | yes |
| ManageTeamMarketplaceModalContent.js | 2861 | team-marketplace | yes | yes |
| ManageTeamMarketplacePluginList.js | 2855 | team-marketplace | no (truncated) |  |
| MarketplaceAccessSection.js | 2856 | marketplace-plugins | yes |  |
| MarketplacePluginRow.js | 2852 | marketplace-plugins | no (truncated) |  |
| MarketplaceScopeSelect.js | 2829 | marketplace-plugins | yes |  |
| MarketplaceSection.js | 3940 | marketplace-plugins | yes |  |
| MarketplaceSectionEndCol.js | 3941 | marketplace-plugins | yes | yes |
| MathBlockPlugin.js | 3169 | editor-plugins-third-party | no (truncated) |  |
| MemoKey.js | 0300 | third-party-statsig | no (truncated) |  |
| MentionChipPlugin.js | 2544 | editor-plugins-third-party | no (truncated) |  |
| MentionOnlyPlaceholderExtension.js | 2926 | unclassified | yes |  |
| MentionsPlugin.js | 4877 | marketplace-plugins | yes |  |
| MicrosoftTeamsIcon.js | 3049 | team | yes | yes |
| ModelButtons.js | 2748 | model | no (truncated) |  |
| ModelCountControls.js | 2737 | model | no (truncated) |  |
| ModelItemRow.js | 2739 | model | no (truncated) |  |
| ModelList.js | 2750 | model | no (truncated) |  |
| ModelListRowLabel.js | 2804 | model | yes | yes |
| ModelNameDisplay.js | 4761 | model | no (truncated) |  |
| ModelNameDisplaySection.js | 7775 | model | no (truncated) |  |
| ModelParameterControls.js | 2743 | model | yes | yes |
| ModelPicker.js | 2815 | model | no (truncated) |  |
| ModelPicker.types.js | 2695 | model | no (truncated) |  |
| ModelPickerContent.js | 2812 | model | no (truncated) |  |
| ModelPickerContext.js | 2700 | model | yes | yes |
| ModelPickerSection.js | 7776 | model | no (truncated) |  |
| ModelPickerTrigger.js | 2813 | model | yes |  |
| ModelPickerViews.js | 2752 | model | yes |  |
| ModelPickerWrapper.react.js | 5144 | model | no (truncated) |  |
| ModelToggles.js | 2751 | model | no (truncated) |  |
| MotionConfigContext.mjs | 6969 | third-party-build-mjs | yes |  |
| NestedModelListSubmenu.js | 2808 | model | no (truncated) |  |
| NetworkConfig.js | 0279 | third-party-statsig | no (truncated) |  |
| OutlineModelPlaygroundSection.js | 7778 | model | no (truncated) |  |
| ParameterizedModelPicker.js | 5146 | model | no (truncated) |  |
| PluginActionConfirmCard.js | 2867 | marketplace-plugins | yes | yes |
| PluginCapabilityBadges.js | 2851 | marketplace-plugins | yes | yes |
| PluginDefaultIcon.js | 2818 | marketplace-plugins | no (truncated) |  |
| PluginDetailView.helpers.js | 3968 | marketplace-plugins | no (truncated) |  |
| PluginDetailView.js | 3969 | marketplace-plugins | no (truncated) |  |
| PluginInstalledCard.js | 3970 | marketplace-plugins | yes |  |
| PluginItem.js | 3967 | marketplace-plugins | no (truncated) |  |
| Plugins.curatedCategories.js | 1216 | marketplace-plugins | yes |  |
| Plugins.search.js | 2821 | marketplace-plugins | yes |  |
| Plugins.shared.stylex.js | 3966 | marketplace-plugins | no (truncated) |  |
| Plugins.types.js | 2873 | marketplace-plugins | yes | yes |
| Plugins.utils.js | 2819 | marketplace-plugins | no (truncated) |  |
| PluginSearchMenu.js | 5304 | marketplace-plugins | yes |  |
| PluginSection.js | 2870 | marketplace-plugins | yes | yes |
| PluginSectionHeader.js | 2871 | marketplace-plugins | yes | yes |
| PluginSourceBadges.js | 2872 | marketplace-plugins | yes | yes |
| PluginUninstallConfirmDialog.js | 3943 | marketplace-plugins | no (truncated) |  |
| PluginVariablesForm.js | 2854 | marketplace-plugins | no (truncated) |  |
| ProjectDatabasePlugin.js | 6298 | marketplace-plugins | yes | yes |
| SearchPlugin.js | 3166 | editor-plugins-third-party | yes |  |
| SearchSelectionScrollExtension.js | 3184 | unclassified | no (truncated) |  |
| SelectedModelParametersMenuContent.js | 2809 | model | yes |  |
| SelectedModelParametersSubmenuContent.js | 2811 | model | no (truncated) |  |
| ShikiCodeBlockTokenizer.js | 3196 | editor-plugins-third-party | yes | yes |
| StatsigClient.js | 0322 | third-party-statsig | no (truncated) |  |
| StatsigClientBase.js | 0310 | third-party-statsig | no (truncated) |  |
| StatsigClientEventEmitter.js | 0305 | third-party-statsig | no (truncated) |  |
| StatsigDataAdapter.js | 0311 | third-party-statsig | no (truncated) |  |
| StatsigEvaluationsDataAdapter.js | 0321 | third-party-statsig | no (truncated) |  |
| StatsigEvent.js | 0281 | third-party-statsig | no (truncated) |  |
| StatsigMetadata.js | 0287 | third-party-statsig | no (truncated) |  |
| StatsigOptionsCommon.js | 0282 | third-party-statsig | no (truncated) |  |
| StatsigPlugin.js | 0312 | third-party-statsig | yes |  |
| StatsigTypeFactories.js | 0313 | third-party-statsig | no (truncated) |  |
| StatsigTypes.js | 0314 | third-party-statsig | no (truncated) |  |
| StatsigUpdateDetails.js | 0315 | third-party-statsig | no (truncated) |  |
| StatsigUser.js | 0291 | third-party-statsig | yes | yes |
| StorageProvider.js | 0283 | third-party-statsig | no (truncated) |  |
| StreamingPlugin.js | 3188 | marketplace-plugins | no (truncated) |  |
| TablePlugin.js | 3194 | editor-plugins-third-party | no (truncated) |  |
| ThirdPartyUsageNudgeBubble.react.js | 5085 | usage-billing | no (truncated) |  |
| ThirdPartyUsageNudgeClassic.js | 5086 | usage-billing | yes |  |
| TokenRing.js | 5120 | settings | yes |  |
| UnifiedUsageBanner.js | 5272 | usage-billing | no (truncated) |  |
| UrlConfiguration.js | 0284 | third-party-statsig | no (truncated) |  |
| UsageLimitPolicyBanner.js | 5271 | usage-billing | no (truncated) |  |
| UsageTable.js | 3946 | usage-billing | no (truncated) |  |
| UsageTable.stylex.js | 3945 | usage-billing | no (truncated) |  |
| VoiceDictationServicePlugin.js | 5308 | editor-plugins-third-party | no (truncated) |  |
| VoicePendingDecorationExtension.js | 2943 | editor-plugins-third-party | yes |  |
| VoiceSettingsDropdown.js | 5147 | settings | yes |  |
| VscodeModelPickerProductContent.react.js | 5142 | model | no (truncated) |  |
| VscodeModelPickerProductTrigger.react.js | 5143 | model | yes |  |
