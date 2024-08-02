import { DugEvents } from '#constants';
import { FactionType } from '#lib/types/Data';
import { formatFailMessage, formatSuccessMessage } from '#lib/util/formatter';
import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';

@ApplyOptions<Command.Options>({
	description: 'Join a faction',
	preconditions: ['EventManager']
})
export class UserCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description)
				.addStringOption((option) =>
					option //
						.setAutocomplete(true)
						.setRequired(true)
						.setName('faction')
						.setDescription('The faction you want to join')
				)
		);
	}

	public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const factionId = Number(interaction.options.getString('faction', true));
		if (isNaN(factionId)) {
			interaction.reply({ content: formatFailMessage('That faction doesnt exist'), ephemeral: true });
			return;
		}

		const faction = await this.container.db.faction.findUnique({
			where: {
				id: Number(factionId)
			}
		});

		if (!faction) {
			interaction.reply({ content: formatFailMessage('That faction doesnt exist'), ephemeral: true });
			return;
		}

		// const isInviteOnly = faction.joinType === FactionStatus.INVITE_ONLY;

		this.container.client.emit(DugEvents.FactionJoin, interaction.user, faction as FactionType);
		interaction.reply({ content: formatSuccessMessage(`You have joined ${faction.name}`) });

		// isInviteOnly
		// interaction.reply({ content: formatSuccessMessage(`Your request to join ${faction.name} has been sent`) })
		// : interaction.reply({ content: formatSuccessMessage(`You have joined ${faction.name}`) });
	}
}
