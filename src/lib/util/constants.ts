import { join } from 'path';

export const rootDir = join(__dirname, '..', '..', '..');
export const srcDir = join(rootDir, 'src');

export const BotPrefix = '.';
export const BotOwners = ['600707283097485322'];
export const EventConfig = {
	EventManager: '1034778285185454090'
};

export const enum DugColors {
	Halloween = 0xff8257,
	Success = 0x46b485,
	Fail = 0xf05050,
	Warn = 0xfee65c,
	Info = 0x297bd1,
	Loading = 0x23272a,
	Default = 0x2b2d31
}

export enum DugEvents {
	ApplicationCommandPermissionsUpdate = 'applicationCommandPermissionsUpdate',
	AutoModerationActionExecution = 'autoModerationActionExecution',
	AutoModerationRuleCreate = 'autoModerationRuleCreate',
	AutoModerationRuleDelete = 'autoModerationRuleDelete',
	AutoModerationRuleUpdate = 'autoModerationRuleUpdate',
	ClientReady = 'ready',
	GuildAuditLogEntryCreate = 'guildAuditLogEntryCreate',
	GuildAvailable = 'guildAvailable',
	GuildCreate = 'guildCreate',
	GuildDelete = 'guildDelete',
	GuildUpdate = 'guildUpdate',
	GuildUnavailable = 'guildUnavailable',
	GuildMemberAdd = 'guildMemberAdd',
	GuildMemberRemove = 'guildMemberRemove',
	GuildMemberUpdate = 'guildMemberUpdate',
	GuildMemberAvailable = 'guildMemberAvailable',
	GuildMembersChunk = 'guildMembersChunk',
	GuildIntegrationsUpdate = 'guildIntegrationsUpdate',
	GuildRoleCreate = 'roleCreate',
	GuildRoleDelete = 'roleDelete',
	InviteCreate = 'inviteCreate',
	InviteDelete = 'inviteDelete',
	GuildRoleUpdate = 'roleUpdate',
	GuildEmojiCreate = 'emojiCreate',
	GuildEmojiDelete = 'emojiDelete',
	GuildEmojiUpdate = 'emojiUpdate',
	GuildBanAdd = 'guildBanAdd',
	GuildBanRemove = 'guildBanRemove',
	ChannelCreate = 'channelCreate',
	ChannelDelete = 'channelDelete',
	ChannelUpdate = 'channelUpdate',
	ChannelPinsUpdate = 'channelPinsUpdate',
	MessageCreate = 'messageCreate',
	MessageDelete = 'messageDelete',
	MessageUpdate = 'messageUpdate',
	MessageBulkDelete = 'messageDeleteBulk',
	MessageReactionAdd = 'messageReactionAdd',
	MessageReactionRemove = 'messageReactionRemove',
	MessageReactionRemoveAll = 'messageReactionRemoveAll',
	MessageReactionRemoveEmoji = 'messageReactionRemoveEmoji',
	ThreadCreate = 'threadCreate',
	ThreadDelete = 'threadDelete',
	ThreadUpdate = 'threadUpdate',
	ThreadListSync = 'threadListSync',
	ThreadMemberUpdate = 'threadMemberUpdate',
	ThreadMembersUpdate = 'threadMembersUpdate',
	UserUpdate = 'userUpdate',
	PresenceUpdate = 'presenceUpdate',
	VoiceServerUpdate = 'voiceServerUpdate',
	VoiceStateUpdate = 'voiceStateUpdate',
	TypingStart = 'typingStart',
	WebhooksUpdate = 'webhookUpdate',
	InteractionCreate = 'interactionCreate',
	Error = 'error',
	Warn = 'warn',
	Debug = 'debug',
	CacheSweep = 'cacheSweep',
	ShardDisconnect = 'shardDisconnect',
	ShardError = 'shardError',
	ShardReconnecting = 'shardReconnecting',
	ShardReady = 'shardReady',
	ShardResume = 'shardResume',
	Invalidated = 'invalidated',
	Raw = 'raw',
	StageInstanceCreate = 'stageInstanceCreate',
	StageInstanceUpdate = 'stageInstanceUpdate',
	StageInstanceDelete = 'stageInstanceDelete',
	GuildStickerCreate = 'stickerCreate',
	GuildStickerDelete = 'stickerDelete',
	GuildStickerUpdate = 'stickerUpdate',
	GuildScheduledEventCreate = 'guildScheduledEventCreate',
	GuildScheduledEventUpdate = 'guildScheduledEventUpdate',
	GuildScheduledEventDelete = 'guildScheduledEventDelete',
	GuildScheduledEventUserAdd = 'guildScheduledEventUserAdd',
	GuildScheduledEventUserRemove = 'guildScheduledEventUserRemove',
	// Custom Events
	FactionJoin = 'factionJoin',
	FactionSendInvite = 'factionSendInvite',
	TriggerDrop = 'triggerDrop'
}

export const DugEmojis = {
	Success: '<:success:1146683498766291024>',
	Fail: '<:fail:1146683470114996274>',
	Reply: '<:reply:1146683155370221639>',
	Off: '<:off:1146683633483141140>',
	On: '<:on:1146683600641736744>',
	Points: '<:point:1151220466913136731>'
};

export const DropChannelID = '1138806085998874746';
export const NotificationChannelID = '825619988853162014';
