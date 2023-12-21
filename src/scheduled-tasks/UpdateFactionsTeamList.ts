import { minutes } from '#lib/util/common';
import { ApplyOptions } from '@sapphire/decorators';
import { ScheduledTask } from '@sapphire/plugin-scheduled-tasks';

@ApplyOptions<ScheduledTask.Options>({
	name: 'UpdateFactionsTeamListTask',
	interval: minutes(2.5),
	bullJobsOptions: { removeOnComplete: true }
})
export class UpdateFactionsTeamListTask extends ScheduledTask {
	public async run() {
		if (!this.container.client.loadedModules.includes('faction')) return;
		console.log(
			"🚀 ~ file: UpdateFactionsTeamList.ts:14 ~ UpdateFactionsTeamListTask ~ run ~ this.container.client.loadedModules.includes('faction'):",
			this.container.client.loadedModules.includes('faction')
		);
		this.container.logger.info('[UpdateFactionsTeamListTask] Started');
		await this.container.faction.list.refreshList();
	}
}

// Add the return type declaration in Augments.d.ts
