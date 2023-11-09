import { ChannelIDs, DugEvents } from '#constants';
import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';
import canvafy from 'canvafy';
const { WelcomeLeave } = canvafy;
import { GuildMember, TextChannel } from 'discord.js';

@ApplyOptions<Listener.Options>({ event: DugEvents.GuildMemberAdd })
export class UserEvent extends Listener {
	public override async run(member: GuildMember) {
		const card = await new WelcomeLeave()
			.setAvatar(member.displayAvatarURL({ forceStatic: true, extension: 'png', size: 1024 }))
			.setBackground('image', `https://imgur.com/hSUCo6F.png`)
			.setTitle(member.user.username, '#000')
			.setDescription(`Welcome! You're the ${member.guild.memberCount}th member to join`, '#000')
			.build();

		const channel = member.guild.channels.cache.get(ChannelIDs.WelcomeChannel) as TextChannel;

		channel.send({
			content: `Welcome ${member} to ${member.guild.name}`,
			files: [
				{
					attachment: card,
					name: 'welcome.png'
				}
			]
		});
	}
}