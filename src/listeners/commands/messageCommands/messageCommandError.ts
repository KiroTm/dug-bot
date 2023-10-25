import { DugColors } from '#constants';
import { sendTemporaryMessage } from '#lib/util/messages';
import { ApplyOptions } from '@sapphire/decorators';
import { Listener, type MessageCommandErrorPayload, UserError, Events, ArgumentError } from '@sapphire/framework';
import { EmbedBuilder, Message } from 'discord.js';

@ApplyOptions<Listener.Options>({
	event: Events.MessageCommandError
})
export class UserListener extends Listener {
	public override async run(error: Error, { message, context }: MessageCommandErrorPayload) {
		if (Reflect.get(Object(context), 'silent')) return;

		if (error instanceof ArgumentError) return this.argumentError(message, error);
		if (error instanceof UserError) return this.userError(message, error);
		return undefined;
	}

	private userError(message: Message, error: UserError) {
		// `context: { silent: true }` should make UserError silent:
		// Use cases for this are for example permissions error when running the `eval` command.
		if (Reflect.get(Object(error.context), 'silent')) return;

		const identifier = error.identifier;
		return sendTemporaryMessage(message, {
			embeds: [
				new EmbedBuilder()
					.setColor(DugColors.Fail)
					.setDescription(error.message)
					.setTitle(identifier ?? 'Error')
			]
		});
	}

	private argumentError(message: Message, error: ArgumentError<unknown>) {
		const argument = error.argument.name;
		const identifier = error.identifier;
		const msg = error.message;
		const parameter = error.parameter.replaceAll('`', '῾');
		console.log(argument, identifier, msg, parameter);
		return sendTemporaryMessage(message, {
			embeds: [
				new EmbedBuilder()
					.setColor(DugColors.Fail)
					.setDescription(msg ?? 'There was an error in command input')
					.setTitle(identifier ?? 'Error')
					.setFooter({ text: `Parameter: ${parameter}, Argument: ${argument}` })
			]
		});
	}
}
