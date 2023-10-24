import { DugEvents } from '#constants';
import { BaseDropType } from '#lib/types/Drops';
import { container } from '@sapphire/framework';

export class BaseDropManager<T extends BaseDropType> {
	private static instance: BaseDropManager<any>;
	protected dropsAvailable: Record<string, T> = {};
	private allowDrop: boolean = true;

	public static getInstance(): BaseDropManager<any> {
		if (!BaseDropManager.instance) {
			BaseDropManager.instance = new BaseDropManager();
		}
		return BaseDropManager.instance;
	}

	public performDropLogic() {
		if (!this.allowDrop) return;
		const randomDrop = this.getRandomDrop();
		if (!randomDrop) return;

		this.triggerDrop(randomDrop.id, randomDrop);
	}

	public triggerDrop(id: string, drop: T) {
		// Assuming container.client and DugEvents are defined elsewhere
		container.client.emit<T>(DugEvents.TriggerDrop, id, drop);
		this.allowDrop = false;
	}

	public getAvailableDrops() {
		return this.dropsAvailable;
	}

	private getRandomDrop(): (T & { id: string }) | null {
		const totalWeight = Object.values(this.dropsAvailable).reduce((acc, drop) => acc + drop.weight, 0);
		if (totalWeight === 0) return null;

		let randomWeight = Math.random() * totalWeight;

		for (const dropName in this.dropsAvailable) {
			if (Object.prototype.hasOwnProperty.call(this.dropsAvailable, dropName)) {
				const drop = this.dropsAvailable[dropName];
				randomWeight -= drop.weight;
				if (randomWeight <= 0) {
					return {
						...drop,
						id: dropName
					};
				}
			}
		}
		return null;
	}
}