import { StorageScope, type StorageService, StorageTarget } from '../../../../glass/host/cursorHost.js';
import { type CustomProvider, STORAGE_KEY } from '../common/localMode.js';
import { parseProviders, serializeProviders } from '../common/providers.js';

export function readProviders(storage: StorageService): CustomProvider[] {
	return parseProviders(storage.get(STORAGE_KEY, StorageScope.APPLICATION));
}

export function writeProviders(storage: StorageService, providers: CustomProvider[]): void {
	storage.store(STORAGE_KEY, serializeProviders(providers), StorageScope.APPLICATION, StorageTarget.MACHINE);
}
