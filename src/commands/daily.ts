import { dailyAnswerCacheKey, dailyCurrentQuestion, dailySubmissionsCacheKey } from '#lib/database/keys';
import { DugCommand } from '#lib/structures';
import { ApplyOptions } from '@sapphire/decorators';
import { send } from '@sapphire/plugin-editable-commands';

@ApplyOptions<DugCommand.Options>({
	description: 'Send your daily submission'
})
export class UserCommand extends DugCommand {
	public override async messageRun(message: DugCommand.Message, args: DugCommand.Args) {
		const member = await args.pick('member').catch(() => null);

		if (!member) {
			send(message, 'Please provide a valid member');
			return;
		}

		const currentQuestion = await this.getCurrentQuestion();
		if (!currentQuestion) {
			send(message, 'There is no current question');
			return;
		}

		console.log(currentQuestion);

		const hasSubmitted = await this.hasSubmitted(message.author.id, currentQuestion);

		if (hasSubmitted) {
			send(message, 'You have already submitted your daily submission');
			return;
		}

		await this.sendSubmission(message.author.id, member.id, currentQuestion);

		send(message, `You have sent your daily submission}`);
	}

	private async getCurrentQuestion() {
		const redis = this.container.cache;

		const question = await redis.get(dailyCurrentQuestion);

		return question;
	}

	private async hasSubmitted(submitterID: string, currentQuestion: string) {
		const redis = this.container.cache;

		const submissions = await redis.lrange(dailySubmissionsCacheKey(currentQuestion), 0, -1);

		return submissions.includes(submitterID);
	}

	private async sendSubmission(submitterID: string, targetId: string, currentQuestion: string) {
		const redis = this.container.cache;

		await redis.lpush(dailySubmissionsCacheKey(currentQuestion), submitterID);
		await redis.lpush(dailyAnswerCacheKey(currentQuestion), targetId);
	}
}
