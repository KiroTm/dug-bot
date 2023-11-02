import { NonBotChannels } from '#constants';
import { ApplyOptions } from '@sapphire/decorators';
import { Precondition } from '@sapphire/framework';
import type { ChatInputCommandInteraction, ContextMenuCommandInteraction, Message, Snowflake } from 'discord.js';

ApplyOptions<Precondition.Options>({
	position: 3
});
export class UserPrecondition extends Precondition {
	public override messageRun(message: Message) {
		return this.isBotChannel(message.channel.id);
	}

	public override chatInputRun(interaction: ChatInputCommandInteraction) {
		return this.isBotChannel(interaction.channel?.id || '0');
	}

	public override contextMenuRun(interaction: ContextMenuCommandInteraction) {
		return this.isBotChannel(interaction.channel?.id || '0');
	}

	private isBotChannel(channelId: Snowflake) {
		const isBotChannel = !NonBotChannels.includes(channelId);

		return isBotChannel ? this.ok() : this.error({ identifier: 'BotChannelOnly', message: 'You can only use this command in a bot channel' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		BotChannelOnly: never;
	}
}
