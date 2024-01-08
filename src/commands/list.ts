import { DugCommand } from '#lib/structures';
import { PetListEmbedBuilder } from '#lib/structures/builders';
import { ApplyOptions } from '@sapphire/decorators';
import { send } from '@sapphire/plugin-editable-commands';

@ApplyOptions<DugCommand.Options>({
	description: 'ADD'
})
export class UserCommand extends DugCommand {
	// Message command
	public override async messageRun(message: DugCommand.Message) {
		console.log('hi');
		const handler = await this.container.pet.getUserPetHandler(message.author.id);
		const pets = await handler.getPets();

		const embed = new PetListEmbedBuilder(pets).build();
		console.log('bye');

		send(message, { embeds: [embed] });
	}
}
