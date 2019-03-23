/* eslint-disable no-shadow */
const { Language, klasaUtil } = require('../index');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);

		this.language = {
			WARNINGS: 'Warnings',
			AFK_HELP_DESCRIPTION: 'Enable/Disable or set a AFK message for yourself.',
			AFK_HELP_EXTENDED: prefix =>
				[
					`**${prefix}afk** will enable or disable your AFK message`,
					`**${prefix}afk your afk message here** will set your new AFK message to be sent.`,
					'',
					'Advanced: You can also set your afk message with a custom made embed!'
				].join('\n'),
			AFK_MESSAGE_UPDATED: 'You have successfully updated your AFK message.',
			AFK_STATUS_TOGGLED: status => `You have successfully **${status ? 'ENABLED' : 'DISABLED'}** your AFK message.`,
			ANNOUNCE_HELP_DESCRIPTION: 'Send an announcement to roles without having to make them mentionable to everyone on your server.',
			ANNOUNCE_CONTENT_REQUEST: 'Please type the message you would like to send. **Hint**: You can also send an embeded message, through an embed code.',
			ANNOUNCE_RESPONSE_AUTHOR_TEXT: memberName => `Announcement By: ${memberName}`,
			ANNOUNCE_RESPONSE_FAILED: 'I was unable to send a message to the channel you provided. Please check the permissions to make sure I have all the necessary permissions.',
			ANNOUNCE_RESPONSE_SUCCESS: 'The announcement was successfully sent.',
			COMMANDS_SERVER: {
				title: guildName => `Server Stats For « ${guildName} »`,
				statsName: 'Server Specific',
				statsValue: (createdAt, owner, channels, roles, members, bots) =>
					[`Created [**${createdAt}**]`, `👑 [**${owner}**]`, `Channels [**${channels}**]`, `Roles [**${roles}**]`, `👥 [**${members}**]`, `🤖 [**${bots}**]`].join('\n'),
				settingsName: 'G4M3R Specific Settings',
				settingsValue: settings =>
					[
						`Language: ${settings.language}`,
						`Moderator Roles: ${settings.settings.moderation.modRoles.map(roleID => `<@&${roleID}>`).join(' ')}`,
						`Admin Users: ${settings.settings.admins.map(userID => `<@${userID}>`).join(' ')}`,
						`AutoAssignRole: ${settings.settings.autoAssignRoles.mainRole ? `<@&${settings.settings.autoAssignRoles.mainRole}>` : ''}`,
						`Self Assignable Roles: ${settings.saRoles.length ? settings.saRoles.map(roleID => `<@&${roleID}>`).join(' ') : 'None'}`,
						`Mod. Assignable Roles: ${settings.assignRoles.length ? settings.assignRoles.map(roleID => `<@&${roleID}>`).join(' ') : 'None'}`,
						`Verify Role: ${settings.settings.verify.role ? `<@&${settings.settings.verify.role}>` : 'None'}`,
						`Mail Category: ${settings.settings.mail.mailCategory ? settings.settings.mail.mailCategory : 'None'}`,
						`Verify Category: ${settings.settings.verify.category}`,
						`Open Verification Channels: ${settings.welcomeChannels.length}`,
						// `Verification Main Channel: ${settings.channels.verifyMainChannelID}`,
						`Send AFK Responses: ${settings.settings.allowAfkResponses}`,
						`Feedback Feature: **Idea:** ${settings.settings.feedback.idea.status} | **Issues**: ${settings.settings.feedback.bug.status}`
					].join('\n')
			},
			BAD_EMBED: 'This was not a **valid embed object**. Best is to use the embed builder <https://embedbuilder.nadekobot.me/>!',
			CS: 'CS',
			DAYS: 'Days',
			DEFEAT: 'Defeat',
			DURATION: 'Duration',
			EVENTS_ADD_ROLE_QUESTION: 'Please provide the @roles, role ids or the role names you would like to use. All members with this role will be added to the event.',
			EVENT_PLATFORM_QUESTION: 'What game platform would you like to use for this event?',
			FEEDBACK_DEFAULT: action => `**${klasaUtil.toTitleCase(action)}** Feedback`,
			FEEDBACK_EDIT_NOT_FOUND: id => `I was unable to find the feedback message with ID: ${id}`,
			FEEDBACK_EDIT_NOT_AUTHOR: 'You are not able to edit this feedback as you are not the author.',
			FEEDBACK_EDIT_SUCCESS: 'You have successfully edited your feedback.',
			FEEDBACK_ORIGINAL_NOT_FOUND: 'The original feedback message was not found so I am unable to edit it.',
			FEEDBACK_FOOTER: (prefix, action, id) => `To send feedback: ${prefix}fb ${action} | To edit feedback: ${prefix}fb edit ${id}`,
			FEEDBACK_FROM: (type, authorName) => `${klasaUtil.toTitleCase(type)} From ${authorName}`,
			FEEDBACK_NOT_ACTIVATED:
				'The server has not enabled the option to send this type of feedback. Please contact a server moderator or admin to enable this feature on your server.',
			FEEDBACK_NOT_VALID_ACTION: (action, validActions) =>
				`**${action}** is not a valid feedback action. Please try again with one of the following:\n\n${validActions.join('\n')}`,
			FEEDBACK_NO_CONTENT: 'You did not provide any feedback to send. Please try again and include the message that you would like to send.',
			FEEDBACK_SENT: 'Your feedback has been sent, thank you!',
			GAMES_PLAYED: 'Games Played',
			HOURS: 'Hours',
			IDEA: 'Idea',
			KDA: 'KDA',
			MAINTAINANCE: 'The bot is in maintainance mode due to a super cool update. Please bare with us for a few minutes, thank you!',
			MENU_CANCEL_OPTIONS: ['q', 'quit'],
			MINUTES: 'Minutes',
			NOT_A_MOD: 'You are not a moderator on this server. Please contact the server moderators or admins.',
			REACTIONROLES_ADDING_FAILED: name => `The ${name} reaction role message was not able to be saved in the database.`,
			REACTIONROLES_ADDING_NEED_EMOJI_NAME:
				"What is the name of the emoji you would like to use? \n**Hint: The emoji must be saved in the database.**\nTo save emoji's please use the **emoji** command.",
			REACTIONROLES_ADDING_NEED_ROLES: 'Please provide the roles that you would like to assign when a user taps this emoji.',
			REACTIONROLES_ADDING_NEED_ACTION: 'Would you like to add more emojis?\n\n**Yes or No?**',
			REACTIONROLES_ADDING_NEED_CONTENT: 'Please provide the embed code for the message that you would like to be displayed with the reaction emojis.',
			REACTIONROLES_ADDING_SUCCESS: name => `You have successfully saved the ${name} reaction role message.`,
			REACTIONROLES_INVALID_EMOJI_NAME:
				'The emoji name you provided was not found in the database. Please add all the emojis you wish to use in the database before creating the role reactions.',
			SECONDS: 'Seconds',
			SETTINGS_EVENTS_MINUTES_FROM_NOW_QUESTION: current =>
				`What is the default amount of minutes you would like newly created events to start from the time of creation? The current amount of minutes to wait is ${current}.`,
			SETTINGS_EVENTS_MINUTES_FROM_NOW_RESPONSE: minutes =>
				`You have successfully set all events to automatically start after ${minutes} minutes from the moment they are created.`,
			SETTINGS_FEEDBACK_IDEA_ALLOWED_ACTIONS: actions =>
				`Please provide an alternative word you would like to use for **idea**.\n\n **Current Words**\n\n${actions.length ? actions.join(', ') : 'No Alternative Words.'}`,
			SETTINGS_FEEDBACK_BUG_ALLOWED_ACTIONS: actions =>
				`Please provide an alternative word you would like to use for **bug**.\n\n **Current Words**\n\n${actions.length ? actions.join(', ') : 'No Alternative Words.'}`,
			SETTINGS_FEEDBACK_ALLOWED_ACTION_SUCCESS: (type, added, removed, skipped) =>
				[
					'',
					`${added.length ? `**Added Words To ${type === 'idea' ? 'Idea' : 'Bug'}**\n\n${added.join(', ')}` : ''}`,
					`${removed.length ? `**Removed Words To ${type === 'idea' ? 'Idea' : 'Bug'}**\n\n${removed.join(', ')}` : ''}`,
					`${skipped.length ? `**Skipped Words To ${type === 'idea' ? 'Idea' : 'Bug'}**\n\n${skipped.join(', ')}` : ''}`
				].join('\n'),
			SETTINGS_FEEDBACK_QUESTIONS: (type, questions) =>
				`Please provide a question to add or remove from the ${type} questions.\n\n**Current Questions:**\n\n${questions.length ? questions.join('\n') : 'No questions'}`,
			SETTINGS_FEEDBACK_QUESTION_SUCCESS: (type, added) => `You have successfully **${added ? 'added' : 'removed'}** the question from ${type} questions.`,
			SETTINGS_FEEDBACK_MESSAGE_QUESTION: (type, item, message) =>
				`What would you like to set as the message to send to the user when you tap the ${
					item === 'solvedMessage' ? this.client.functions.constants.EMOJIS.GREEN_CHECK : this.client.functions.constants.EMOJIS.RED_X
				} for **${type}** feedbacks.\n\n**Current Message:**\n\n${message}`,
			SETTINGS_FEEDBACK_MESSAGE_SUCCESS: (type, item) =>
				`The message for **${type}** feedback when tapping the ${
					item === 'solvedMessage' ? this.client.functions.constants.EMOJIS.GREEN_CHECK : this.client.functions.constants.EMOJIS.RED_X
				} reaction has been changed successfully.`,
			SETTINGS_FEEDBACK_XP_QUESTION: (emoji, points) => `How many XP should be edited when ${emoji} is tapped?\n\n**Current Message:**\n\n${points}`,
			SETTINGS_FEEDBACK_XP_SUCCESS: (emoji, points) => `You have successfully set ${points} to be edited when the ${emoji} is tapped.`,
			SETTINGS_LEVELS_MENU_LIST_DATA: xp => [
				'Create Level',
				'Delete Level',
				'Edit Level Name',
				'Edit Level XP Needed',
				'Edit Level Rewards',
				'Edit XP Per Command',
				`XP Per Message [${xp.pointsPerMessage}]`,
				`Server: **In-channel** notification [**${xp.notification.server.channel ? 'On' : 'Off'}**]`,
				`Server: **Direct message** notification [**${xp.notification.server.dm ? 'On' : 'Off'}**]`,
				`Global: **In-channel** notification [**${xp.notification.global.channel ? 'On' : 'Off'}**]`
			],
			SETTINGS_NOTIFICATION_UPDATE_SERVER_RESPONSE: (activated, isChannel) =>
				`${isChannel ? 'In-Channel' : 'DM'} notifications for **server xp level-ups** are now **${activated ? 'ENABLED' : 'DISABLED'}** for this server.`,
			SETTINGS_NOTIFICATION_UPDATE_GLOBAL_RESPONSE: activated =>
				`In-Channel notifications for **global xp level-ups** are now **${activated ? 'ENABLED' : 'DISABLED'}** for this server.`,
			SETTINGS_LEVEL_CREATE_NAME_QUESTION: 'What is the name you would like to use for this level?',
			SETTINGS_LEVEL_CREATE_NUMBER_QUESTION: 'How much experience does a user need to get to earn this level?',
			SETTINGS_LEVEL_CREATE_ROLE_QUESTION:
				'Please type the role name/role id/@role that you would like to assign as a reward for unlocking this level? If you do not wish to give a reward please type [s]ave.',
			SETTINGS_LEVEL_CREATE_SUCCESS: (name, xpNeeded, roles) =>
				`You have successfully created the **${name}** level with **${xpNeeded}** needed experience to level up${typeof roles === 'string' ? '' : ` and earn the ${roles}`}`,
			SETTINGS_LEVEL_DELETE_SELECT_LEVEL_TITLE: 'Please select the level that you would like to delete.',
			SETTINGS_LEVEL_DELETE_SUCCESS: level => `You have successfully deleted level ${level}`,
			SETTINGS_LEVEL_EDIT_NAME_QUESTION: name => `What would you like to change the name of this level to? You current name is **${name}**.`,
			SETTNGS_LEVEL_EDIT_NAME_SUCCESS: name => `You have successfully updated the name of the level to **${name}**.`,
			SETTINGS_LEVEL_EDIT_NUMBER_QUESTION: xpNeeded => `What would you like to change the XP Needed of this level to? Your current XP Needed is **${xpNeeded}**`,
			SETTNGS_LEVEL_EDIT_XP_NEEDED_SUCCESS: xpNeeded => `You have successfully updated the XP Needed of this level to **${xpNeeded}**.`,
			SETTINGS_LEVEL_EDIT_ROLE_QUESTION: roles => `Which role would you like to add or remove?\n\n${roles.length ? `**Current Rewards:** ${roles.join('\n')}` : ''}`,
			SETTNGS_LEVEL_EDIT_ROLE_SUCCESS: roles => `You have successfully updated the following roles to be used for this level:\n\n**Updated Roles:**\n\n${roles}`,
			SETTINGS_LEVEL_PICK_LEVEL: 'Please choose the level you would like to edit',
			SETTINGS_LEVEL_PICK_COMMAND: 'Please choose the command you would like to edit',
			SETTINGS_LEVEL_INVALID_LEVEL: level => `The level **${level}**, you selected does not exist. Please try again.`,
			SETTINGS_LEVEL_COMMAND_AMOUNT: (commandName, currentAmount) =>
				`What would you like to set the **${commandName}** experience gain to? The current value is **${currentAmount}**.`,
			SETTINGS_LEVEL_UPDATE_COMMAND_SUCCESS: (commandName, newAmount) => `You have successfully updated the **${commandName}** value to be **${newAmount}**.`,
			SETTINGS_GROUPED_ROLES_CHOOSE_OR_CREATE_TITLE: 'Please choose a unique set of roles that you would like to edit or to create a new group',
			SETTINGS_GROUPED_ROLES_CHOOSE_NAME: name => `Please choose a name to give this unique set of roles.${name ? `/n/n**Current Name:** ${name}` : ''}`,
			SETTINGS_GROUPED_ROLES_CHOOSE_ROLES: roles =>
				`Please type all the role names or @role or role ids that you wish to add into this unique set of roles.\n\n${
					roles && roles.length ? `**Current Roles:** ${roles.map(r => `<@&${r}>`).join(', ')}` : ''
				}`,
			SETTINGS_GROUPED_ROLES_CREATED_NEW_GROUP: 'You have successfully created a new unique set of roles.',
			SETTINGS_GROUPED_ROLES_CHOOSE_ACTION: 'Please choose if you want to edit a name, edit the roles or to delete the unique set of roles.',
			SETTINGS_GROUPED_ROLES_DELETED: name => `The ${name} unique set roles set has been removed from the database.`,
			SETTINGS_GROUPED_ROLES_EDITED_NAME: name => `You have successfully edited the name of the unique roles set to be **${name}**`,
			SETTINGS_GROUPED_ROLES_EDITED_ROLES: 'You have successfully updated the roles of the unique role set!',
			VAINGLORY_NO_HERO_DATA: 'There was no data found of the vainglory hero you searched for.',
			VERIFY_CATEGORY_NAME: 'Verification Zone',
			VERIFY_MAIN_CHANNEL_NAME: 'Verify',
			SETTINGS_VERIFY_CATEGORY_NAME: 'Verification Zone',
			SETTINGS_VERIFY_MAIN_CHANNEL_NAME: 'verify',
			TIME_WORD: 'Time',
			VAINGLORY_CURRENT_RANK: 'Current Rank',
			VAINGLORY_LIFETIME: 'Vainglory Lifetime Stats',
			VAINGLORY_NO_MATCHES_FOUND:
				'The Vainglory API did not return any matches of the username you provided. Please check the spelling of the username and try again. If the spelling is correct, make sure the account has played atleast 10-15 games, otherwise the data will not be available on the API.',
			VAINGLORY_NO_PLAYER_FOUND:
				'The Vainglory API did not return any data of the username you provided. Please check the spelling of the username and try again. If the spelling is correct, make sure the account has played atleast 10-15 games, otherwise the data will not be available on the API.',
			VAINGLORY_NO_USERNAME: 'You did not provide a username and have no username registered for Vainglory.',
			VAINGLORY_RANKED3V3: '3v3',
			VAINGLORY_TEAM_STATS: (emoji, aces, gold, kills, bosses, turrets, is5v5) =>
				`${emoji} **Aces:** ${aces} **Gold:** ${gold} **Kills:** ${kills} **${is5v5 ? 'Dragons' : 'Krakens'}:** ${bosses} **Turrets**: ${turrets}`,
			VAINGLORY_TIME_PLAYED: 'Estimated Lifetime Time Played',
			VAINGLORY_VGPRO_DETAILS: 'Click here for more details (At VGPRO.GG).',
			VICTORY: 'Victory',
			VIP_ONLY: 'Sorry, this command is for VIP servers only. If you wish to be a VIP please contact us at http://support.g4m3r.xyz',
			VIPSETTINGS_DESCRIPTION: 'Change your VIP settings for your servers',
			VIPSETTINGS_EXTENDED_HELP: 'Change your VIP settings for your servers similar to the settings command.',
			VIPSETTINGS_DEFAULT_MENU_LIST: vainglory => [
				`Max Inactive Days: [ ${vainglory.maxInactiveTime || 'None'} ]`,
				`Inactivity Channel [ ${vainglory.guildNotificationChannel ? `<#${vainglory.guildNotificationChannel}>` : 'None'} ]`,
				`Guild Member: [ ${vainglory.guildMembers.length} ]`
			],
			VIPSETTINGS_VG_GUILD_MEMBERS_QUESTION: members =>
				`Please type all the InGameNames of your guild. If they are already in the list below they will be removed, otherwise they will be added to the database.\n\n**Current Members**\n\n${
					members.length ? members.join('\n') : 'No Members Added.'
				}`,
			VIPSETTINGS_VG_GUILD_MEMBERS_UPDATED: (skipped, added, removed) =>
				[
					skipped.length ? `\n\n**Skipped Members:**\n\n${skipped.join(' ')}` : '',
					added.length ? `${skipped.length ? '\n\n' : ''}**Added Members:**\n\n${added.join(' ')}` : '',
					removed.length ? `${skipped.length || added.length ? '\n\n' : ''}**Removed Members:**\n\n${added.join(' ')}` : ''
				].join(' '),
			VIPSETTINGS_VG_GUILD_NOTIFICATION_QUESTION: current =>
				`Please provide the #channel you wish to be notified in for Vainglory Guild Notifications.\n\n**Current Channel:** ${current || 'None'}`,
			VIPSETTINGS_VG_GUILD_NOTIFICATION_UPDATED: channel => `The guild notification channel has been updated to ${channel}!`,
			VIPSETTINGS_VG_MAX_INACTIVE_TIME_QUESTION: current =>
				`What is the maximum amount of time a guild member can be inactive for?\n\nCurrent Inactivity Allowed: ${current ? `${current} Days` : 'None'}`,
			VIPSETTINGS_VG_MAX_INACTIVE_TIME_RESPONSE: newAmount => `You have successfully set the maximum inactivity period for your guild to be ${newAmount} days`,
			WIN_RATIO: 'Win Ratio',
			PERMISSION: {
				LIST: {
					ADMINISTRATOR: 'Administrator',
					VIEW_AUDIT_LOG: 'View Audit Log',
					MANAGE_GUILD: 'Manage Server',
					MANAGE_ROLES: 'Manage Roles',
					MANAGE_CHANNELS: 'Manage Channels',
					KICK_MEMBERS: 'Kick Members',
					BAN_MEMBERS: 'Ban Members',
					CREATE_INSTANT_INVITE: 'Create Instant Invite',
					CHANGE_NICKNAME: 'Change Nickname',
					MANAGE_NICKNAMES: 'Manage Nicknames',
					MANAGE_EMOJIS: 'Manage Emojis',
					MANAGE_WEBHOOKS: 'Manage Webhooks',
					VIEW_CHANNEL: 'Read Messages',
					SEND_MESSAGES: 'Send Messages',
					SEND_TTS_MESSAGES: 'Send TTS Messages',
					MANAGE_MESSAGES: 'Manage Messages',
					EMBED_LINKS: 'Embed Links',
					ATTACH_FILES: 'Attach Files',
					READ_MESSAGE_HISTORY: 'Read Message History',
					MENTION_EVERYONE: 'Mention Everyone',
					USE_EXTERNAL_EMOJIS: 'Use External Emojis',
					ADD_REACTIONS: 'Add Reactions',
					CONNECT: 'Connect',
					SPEAK: 'Speak',
					MUTE_MEMBERS: 'Mute Members',
					DEAFEN_MEMBERS: 'Deafen Members',
					MOVE_MEMBERS: 'Move Members',
					USE_VAD: 'Use Voice Activity'
				},
				RESTRICTED_HELP: ({ command, role }) => `⛔ **»»** This part of the ${command} command is only for ${role}`,
				ADMIN_ONLY: 'You are not an admin of this server and cannot use this command!',
				NOT_MOD_OR_ADMIN: 'You are not admin of this server nor do not have one of the moderation roles!',
				NOT_ALLOWED_TYPE: (type, allowedTypes) => `Sorry, \`${type}\` is not allowed. Allowed types are \`${allowedTypes.join('`, `')}\``,
				NOT_ALLOWED_ACTIONS: (action, allowedActions) => `Sorry, \`${action}\` is not an allowed action. Allowed actions are \`${allowedActions.join('`, `')}\``,
				NOT_ALLOWED: (arg, type, allowedArgs) => `Sorry, \`${arg}\` is not allowed. Allowed ${type} are \`${allowedArgs.join('`, `')}\``,
				MISSING_PERM: perm =>
					`G4M3R is missing the permission ${perm} to execute this command. Please contact a moderator or admin to give me the necessary perms and try this again.`,
				PREMIUM_ONLY: `Sorry, the command you have used is a Premium Server only feature. If you wish to have access to this feature please contact us at http://support.g4m3r.xyz/`
			},
			REQUIREMENTS: {
				NO_USER: 'You have to **mention a user** or give me an **user ID** to make this happen',
				NO_MEMBER: 'You have to **mention a server member** or give me a **member ID** to make this happen',
				NO_RESPONSE: 'You did not provide any **valid response** in the allowed time. Please try again.',
				NO_INTEGER: value => `You did not provide an **integer** as needed for the value ${value}. Please try again.`,
				NO_VALID_ACTION: actions => `You did not provide a **valid action**. Valid actions are \`${actions.join('`, `')}\``,
				ACTION_MANDATORY: actions =>
					`You did not provide **any action**. For this command, this is necessary to provide a valid action. Valid actions are \`${actions.join('`, `')}\``,
				NO_EMBED: 'The object you provided is not a **valid embed**.'
			},
			BASICS: {
				REASON: 'REASON',
				ADDING: 'Adding',
				REMOVING: 'Removing',
				USING: 'Using',
				ASSIGNED: 'Assigned',
				CLICK_ME: 'Click Me',
				PLATFORM: 'Platform',
				TYPE: 'Type',
				OPTIONS: 'Options',
				PAGE: 'Page',
				TITLE: 'Title',
				MEMBER: 'Member',
				INFO: 'Info',
				JOINED: 'Joined',
				SERVER: 'Server',
				REGION: 'Region',
				RANK: 'Rank'
			},
			LIMITS: {
				CHARS: amount => `a string with max. ${amount} characters.`,
				NICKNAME_LENGTH: 'Discord nicknames cannot be longer than **32 chars**. Please try again.'
			},
			ERRORS: {
				NO_USERNAME: 'no username found'
			},
			MENU: {
				TYPE_NUMBER: 'Please type the respective number to select',
				DATE_FORMAT: military => military ? 'YYYY/MM/DD HH:mm [[]z[]]' : 'YYYY/MM/DD h:mma [[]z[]]',
				CANCEL_OPTIONS: ['q', 'quit'],
				SAVE_OPTIONS: ['s', 'save'],
				BACK_OPTIONS: ['b', 'back'],
				BACK_QUIT_OPTIONS: ['b', 'back', 'q', 'quit'],
				CREATE_OPTIONS: ['c', 'create'],
				DELETE_OPTIONS: ['d', 'delete'],
				ADVERTISE_OPTIONS: ['ad', 'advertise'],
				YES_OPTION: ['y', 'yes', 'okay', 'ok', 'yeah'],
				NO_OPTION: ['n', 'no', 'never'],
				REMOVE_OPTIONS: ['r', 'remove', 'delete', 'del'],
				START_OPTIONS: ['st', 'start'],
				SHOW_OPTIONS: ['sh', 'show'],
				SELECT_MENU_WITH_NUMBER: '**Please type a number to select a menu**',
				YES_NO_FOOTER: 'Type [q]uit, [y]es or [n]o',
				MENU_FOOTER: ({ back, create, del, next, save, start, remove, advertise, show, yesNo } = {}) =>
					`Type [q]uit${back ? ', [b]ack' : ''}${save ? ', [s]ave' : ''}${create ? ', [c]reate' : ''}${next ? ', [n]ext' : ''}${del ? ', [d]elete' : ''}${
						start ? ', [st]art' : ''
					}${remove ? ', [r]emove' : ''}${advertise ? ', [ad]vertise' : ''}${show ? ', [sh]ow' : ''}${yesNo ? ', [y]es, [n]o' : ''}${
						!back && !create && !del && !next && !save && !start && !remove && !advertise && !show && !yesNo ? ' to cancel anytime.' : ' .'
					}`,
				CLOSE_MENU: menuName => `Closed the ${menuName} menu for you :ok_hand:`,
				INVALID_RESPONSE: 'Closed the menu because either you did not provide a response or the response was an invalid response',
				CLOSE_MENU_MISSING_INPUT: menuName => `**Closed** the **${menuName} menu** because of **missing user input** <:info:443803045382324225>`,
				WRONG_SELECTION: ' your input was not a valid one. Select from the list via typing a number or please quit the menu properly before talking',
				CREATE: 'Create'
			},
			EVENT_TIMES: [
				{ id: 1, day: 'monday' },
				{ id: 2, day: 'tuesday' },
				{ id: 3, day: 'wednesday' },
				{ id: 4, day: 'thursday' },
				{ id: 5, day: 'friday' },
				{ id: 6, day: 'saturday' },
				{ id: 7, day: 'sunday' },
				{ id: 8, day: 'tomorrow' },
				{ id: 9, day: 'today' }
			],
			GAMING: 'Gaming',
			COMMUNITY: 'Community',
			CALENDAR: 'Calendar',
			BLAME_PEDALL: 'Sorry, it seems something went wrong. Everyone blame recurve and not pedall please. Skillz is innocent for sure! 😂',
			REASON: 'Reason',
			CONTACT_ADMIN: 'Please contact your server admins for more information.',
			ENABLED: 'Enabled',
			DISABLED: 'Disabled',
			AT: 'at',
			COMMANDS_ADMIN: {
				DELETE: {
					HELP_DESCRIPTION: 'Activate the deletion of command messages for specified commands',
					LIST_TITLE: deletionCommands => `${deletionCommands.length ? 'These are your' : 'There are no'} commands with the deletion of their messages activated.`,
					NO_COMMAND_RESPONSE: '⚠ **»»** You have to provide a command or its alias to enable / disable the deletion of command messages.',
					FINAL_RESPONSE: ({ isDelete, command }) => `**${isDelete ? 'enabled' : 'disabled'}** command message deletion for the command \`${command}\``
				},
				EMOJI: {
					HELP_DESCRIPTION: 'Register custom emojis to use them within tags / stories / welcome & goodbye messages',
					EXTENDED_HELP: prefix =>
						[
							'',
							'**» Options to nuke messages:**',
							`  • \`${prefix}emoji add emojiname <:blabla:12345678910111213>\` *adds the emoji so you can use it with {emojiname} within embeds*`,
							`  • \`${prefix}emoji\` *lists all registered emojis`
						].join('\n'),
					NO_CUSTOM_NAME: 'You have not entered a custom name for your emoji. Please try again in the format `emoji add <custom name> <emoji>`',
					NEW_EMOJI_ID: 'Please enter the respective custom emoji **ID number**',
					WRONG_INPUT: 'wrong input',
					EMOJI_CREATED_AT: 'Created At',
					CUSTOM_EMOJI: 'Custom Emoji:',
					REGISTERED_BY: 'Registered by',
					NO_EMOJI: 'no emojis found for this type',
					CUSTOM_NAME_EXISTS: (emojiName, exists) =>
						`The custom emoji with the name **\`${emojiName}\` ${exists ? 'already exists' : 'does not exist'}**. Please choose another custom name.`,
					EMOJI_EXISTS: (emoji, type, emojiName) => `The custom emoji **\`${emoji}\`** has been **already registered** for this \`${type}\` with the custom name \`${emojiName}\`.`,
					NO_CUSTOM_EMOJI: emoji => `Your input \`${emoji}\` is not a valid custom emoji. Please try again.`,
					ADD_SUCCESS: emoji =>
						`Successfully **added** your emoji **${emoji}**. \n\nYou can now use this custom emoji in your stories, tags, welcome/goodbye messages and embeds by putting it within curly brackets like this **\`{${emoji}}\`**.`,
					REMOVE_SUCCESS: emoji => `Successfully **removed** your emoji **${emoji}**. Please make sure to update your stories, tags and welcome/goodbye messages`,
					NO_EMOJI_EXISTS: 'You have not saved any custom emojis that could possibly removed',
					CUSTOM_NAME_QUESTION: 'Please give me some custom name for your emoji',
					LIST_TITLE: 'Please select one of the following emojis to get more details',
					CLIENT_EMOJI_MISSING: emoji => `The emoji ${emoji} is not available to the bot. Please set up the emoji on a server the bot has access to.`
				},
				NUKE: {
					HELP_DESCRIPTION: 'Nukes a certain amount of messages without filter.',
					EXTENDED_HELP: [
						'',
						'**» Options to nuke messages where [x] is the amount you want to delete:**',
						`  • \`nuke [x]\` *deletes x messages`,
						`  • \`nuke [x] @user\` *deletes x messages from that user`,
						`  • \`nuke [x] link\` *deletes x posted links`,
						`  • \`nuke [x] invite\` *deletes x invite links (discord.gg)`,
						`  • \`nuke [x] bots\` *deletes x messages from all bots`,
						`  • \`nuke [x] you\` *deletes x messages from the bot`,
						`  • \`nuke [x] me\` *deletes x messages from the command author`,
						`  • \`nuke [x] upload\` *deletes x messages with attachments`
					].join('\n')
				},
				PERMISSION: {
					HELP_DESCRIPTION: 'Activate the usage of a certain command in a specified channel and or role.',
					HELP_EXTENDED: [
						'**» Get information**',
						'• `permission <command name>` *details for one command*',
						'• `permission <role name|id|mention>` *details for one role*',
						'• `permission <channel name|id|mention>` *details for one command*',
						'• `permission` *overview for all commands*',
						'',
						'**» Set permissions**',
						'• `permission enable|disable <command name> <channel|role name|id|mention>`',
						'*add an exception if command is disabled / enabled*',
						'• `permission enable|disable <command name>`',
						'*enable or disable a command totally*',
						'• `permission remove <command name> `',
						'*removes all current exceptions of a command*',
						'• `permission remove <command name> <roles|channels>`',
						'*removes all current role or channel exceptions of a command*'
					].join('\n'),
					NO_COMMAND: action => `You need to provide a command to ${action} or to define exceptions for it.`,
					NO_CHANNEL_ROLE: status => `Please provide a channel or role to be added to the \`${status} exceptions\``,
					NO_BOTH: (type, status) => `Please do not provide a channel AND a role to be ${type} to the \`${status} exceptions\` at the same time.`,
					BAD_ROLE: role => `The role \`${role}\` you entered does not exist on this server`,
					NO_SETTING_FOUND: command => `There are currently no permission setting for the command: \`${command}\``,
					ALL_COMMANDS_ALLOWED: (type, object) => `Currently there are no permission settings made for any command ${type ? `regarding the **${type}** ${object}` : ''}`,
					COMMAND_TITLE: (disabled, name) => `Command [${disabled ? `${name}] is disabled <:offline:398045782344728576>` : `${name}] is enabled <:online:398045782390865920>`}`,
					COMMAND_FIELD_NAME: disabled => `${disabled ? 'Enabled' : 'Disabled'} in:`,
					CHANNEL_AUTHOR: channel => `Channel #${channel}`,
					DISABLED_COMMANDS: '<:offline:398045782344728576> Disabled commands:',
					ENABLED_COMMANDS: '<:online:398045782390865920> Enabled commands:',
					ENABLED_CHANNEL_EXCEPTION: '<:online:398045782390865920> Enabled for channel:',
					DISABLED_CHANNEL_EXCEPTION: ' <:offline:398045782344728576> Disabled for channel:',
					ENABLED_ROLE_EXCEPTION: '<:online:398045782390865920> Enabled for role:',
					DISABLED_ROLE_EXCEPTION: ' <:offline:398045782344728576> Disabled for role:',
					FOOTER: 'Only showing exceptions if there are special permissions for a command',
					ROLE_AUTHOR: role => `Role #${role}`,
					FULL_AUTHOR: 'All commands with special permissions defined',
					FULL_FOOTER: '[] means that command has exceptions in place',
					COMMAND_UNCHANGEABLE: (command, enable) => `The command \`${command}\` cannot be ${enable ? 'enabled' : 'disable'} since it already is ;-)`,
					ALREADY_EXISTS: (channel, arg, already, enable) =>
						`⚠ **»»** The ${channel ? 'channel' : 'role'} ${arg} is ${already ? 'already' : 'not'} in the \`${enable ? 'enabled' : 'disabled'} exceptions\``,
					CHANGED_COMMAND: (command, enable) =>
						`The command \`${command}\` is now **${enable ? 'enabled' : 'disabled'}** for the whole server. Your old exceptions for ${
							enable ? 'enabled' : 'disabled'
						} channels / roles have been deleted.`,
					ADDED: 'added',
					ENABLED: 'enabled',
					REMOVED: 'removed',
					DISABLED: 'disabled',
					CHANGED: (add, channel, arg, enable) =>
						`${add ? '**Added**' : '**Removed**'} ${channel ? 'channel' : 'role'} ${arg} ${add ? 'to' : 'from'} the \`${enable ? 'enabled' : 'disabled'} exceptions\``,
					REMOVE_SUCCESS: (type, command, arg) => `Successfully **removed ${type}${arg ? ` ${arg}` : ''} exception${type === 'all' ? 's' : ''}** for the command **${command}**`
				},
				SAVEROLE: {
					HELP_DESCRIPTION: 'Adds/removes a role on the list of self assignable roles for your server.',
					EXTENDED_HELP: prefix =>
						[
							'**If a role name has spaces:**',
							`\`${prefix}saverole "role name with spaces"\``,
							'',
							'**Other Examples:**',
							`\`${prefix}saverole roleName\``,
							'*Adds / removes role to self-assignable roles*',
							'',
							`\`${prefix}saverole roleName mods\``,
							'*Adds / removes role to roles that only can be assigned by admins or mods*'
						].join('\n'),
					NO_ROLE: 'You have to provide a role so that you can add it to the `self-assignable` or `assignable` roles.',
					LIST_NOT_ALLOWED: 'Sorry, `list` is a reserved term that is used to show all `self-assignable` or `assignable` roles.',
					INVALID_ROLE: 'You did not enter a valid role as it was not found on the server. Please try again.',
					NOT_ADMIN: 'This role can only be assigned by a server admin!',
					RESPONSE_MESSAGE: role => `The role \`${role.name}\` has been`,
					RESPONSE_IS_MOD: roleExists => !roleExists ? '**added** to' : '**removed** from',
					RESPONSE_IS_NOT_MOD: roleExists => !roleExists ? '**added** to' : '**removed** from',
					RESPONSE_FINISH: isModRole => `the ${isModRole ? 'assignable roles by moderators' : 'self assignable roles'}.`
				},
				SETTINGS: {
					HELP_DESCRIPTION: 'Manage all your server/guild settings via in-chat menu.',
					EXTENDED_HELP: [
						'  • `settings` (Opens interactive menu with all server/guild settings).',
						'  • `settings [menu]` (Opens a sub menu directly)',
						'  • `settings [menu] [input]` (Directly sets the input, when possible).',
						'',
						'» Interactive Tutorial:',
						'  • Type numbers to select',
						'  • Type letters / words for the options (e.g. `q` for quitting the menu)',
						'',
						'» Do not write the brackets []',
						'» Alias for the command is `gs` and it works in-chat only'
					].join('\n'),
					LEVELS_GLOBAL_CHANNEL_NOTIFY_STATUS_RESPONSE: activated =>
						`In-Channel notifications for **global xp level-ups** are now **${activated ? 'ENABLED' : 'DISABLED'}** for this server.`,
					LEVELS_SERVER_CHANNEL_NOTIFY_STATUS_RESPONSE: activated =>
						`In-Channel notifications for **server xp level-ups** are now **${activated ? 'ENABLED' : 'DISABLED'}** for this server.`,
					LEVELS_SERVER_DM_NOTIFY_STATUS_RESPONSE: activated => `DM notifications for **server xp level-ups** are now **${activated ? 'ENABLED' : 'DISABLED'}** for this server.`,
					LEVELS_POINTSPERMESSAGE_QUESTION: current => `How much XP should be given for messages sent? Your current value is at ${current}.`,
					LEVELS_POINTSPERMESSAGE_RESPONSE: amount => `You have successfully changed the amount of XP gained for messages sent to ${amount}.`,
					CAPITALS_SPAM_AUTOMOD_STATUS_CHANGED: status => `You have successfully **${status ? 'enabled' : 'disabled'}** the capital spam filter.`,
					CAPITALS_SPAM_AUTOMOD_AMOUNT_QUESTION: amount =>
						`What is the **maximum percentage amount** of CAPITAL letters you would like to allow as? The current amount is set as ${amount}.`,
					CAPITALS_SPAM_AUTOMOD_AMOUNT_RESPONSE: amount => `You have **successfully changed** the maximum capital percentage allowed to be **${amount} %**.`,
					GROUPED_ROLES_MENU: () => [
						`Add Unique Role Set`,
						`Remove Unique Role Set`
						// `Edit Unique Role Set`
					],
					MAIL_REPLY_PERM_QUESTION: current =>
						`What would you like to set the necessary permission required to read and reply to Moderation Mails?\nYour current level is set as **${current}**`,
					MODMAILS_MAX_PER_USER: amount =>
						`What is the maximum amount of mails you would like to allow a single user to be able to send at the same time. The current max is ${amount}.`,
					MODMAILS_MAX_PER_USER_RESPONSE: amount => `The maximum amount of mails a user can send has been set to **${amount}**.`,
					MODMAILS_MAX_PER_GUILD: amount => `What is the maximum amount of mails you would like to allow on the server at the same time. The current max is ${amount}.`,
					MODMAILS_MAX_PER_GUILD_RESPONSE: amount => `The maximum amount of mails on the server has been set to **${amount}**.`,
					MODERATION_MENU_LIST_DATA: moderation => [
						'Mod Logs',
						`Moderation Roles [${moderation.modRoles.length}]`,
						`Mute Roles Menu`,
						`Moderation Mails`,
						`Auto-Moderation`,
						'Welcome/Goodbye',
						'Verification System'
					],
					MODLOG_STATUS_RESPONSE: status => `The Mod Logs system has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					SERVERLOG_MENU_LIST_DATA: (serverLogs, mainChannel, channels) => [
						`Server Log Status [ **${serverLogs.status ? 'On' : 'Off'}** ]`,
						`Server Log Main Channel [ ${mainChannel || 'None Selected'} ]`,
						`Role Create [ **${serverLogs.roleCreate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.roleCreate.channel) || 'None'} ]`,
						`Role Delete [ **${serverLogs.roleDelete.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.roleDelete.channel) || 'None'} ]`,
						`Role Update [ **${serverLogs.roleUpdate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.roleUpdate.channel) || 'None'} ]`,
						`Member Add [ **${serverLogs.memberAdd.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.memberAdd.channel) || 'None'} ]`,
						`Member Remove [ **${serverLogs.memberRemove.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.memberRemove.channel) || 'None'} ]`,
						`Command Ran [ **${serverLogs.cmdRan.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.cmdRan.channel) || 'None'} ]`,
						`Tag Ran [ **${serverLogs.tagRan.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.tagRan.channel) || 'None'} ]`,
						`Story Ran [ **${serverLogs.storyRan.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.storyRan.channel) || 'None'} ]`,
						`Message Deleted [ **${serverLogs.msgDeleted.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.msgDeleted.channel) || 'None'} ]`,
						`Message Update [ **${serverLogs.msgUpdate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.msgUpdate.channel) || 'None'} ]`,
						`Emoji Create [ **${serverLogs.emojiCreate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.emojiCreate.channel) || 'None'} ]`,
						`Emoji Delete [ **${serverLogs.emojiDelete.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.emojiDelete.channel) || 'None'} ]`,
						`Emoji Update [ **${serverLogs.emojiUpdate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.emojiUpdate.channel) || 'None'} ]`,
						`Channel Create [ **${serverLogs.channelCreate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.channelCreate.channel) || 'None'} ]`,
						`Channel Delete [ **${serverLogs.channelDelete.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.channelDelete.channel) || 'None'} ]`,
						`Channel Update [ **${serverLogs.channelUpdate.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.channelUpdate.channel) || 'None'} ]`,
						`Server Deaf [ **${serverLogs.serverDeaf.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.serverDeaf.channel) || 'None'} ]`,
						`Server Mute [ **${serverLogs.serverMute.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.serverMute.channel) || 'None'} ]`,
						`Nickname Changed [ **${serverLogs.nicknameChanged.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.nicknameChanged.channel) || 'None'} ]`,
						`Member Role Perms Changed [ **${serverLogs.memberRolePermissionsChanged.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.memberRolePermissionsChanged.channel)
							|| 'None'} ]`,
						`Member Roles Updated [ **${serverLogs.memberRoleUpdated.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.memberRoleUpdated.channel) || 'None'} ]`,
						`Guild Ban Add [ **${serverLogs.guildBanAdd.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.guildBanAdd.channel) || 'None'} ]`,
						`Guild Ban Remove [ **${serverLogs.guildBanRemove.status ? 'On' : 'Off'}** => ${channels.get(serverLogs.guildBanRemove.channel) || 'None'} ]`
					],
					SERVERLOGS_ROLECREATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the role create server logs.`,
					SERVERLOGS_ROLECREATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the role create public logs.`,
					SERVERLOGS_ROLECREATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the role create server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_ROLECREATE_CHANNEL_RESPONSE: channel => `You have set the role create server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_ROLEDELETE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the role delete server logs.`,
					SERVERLOGS_ROLEDELETE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the role delete public logs.`,
					SERVERLOGS_ROLEDELETE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the role delete server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_ROLEDELETE_CHANNEL_RESPONSE: channel => `You have set the role delete server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_ROLEUPDATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the role update server logs.`,
					SERVERLOGS_ROLEUPDATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the role update public logs.`,
					SERVERLOGS_ROLEUPDATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the role update server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_ROLEUPDATE_CHANNEL_RESPONSE: channel => `You have set the role update server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_MEMBERADD_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member add server logs.`,
					SERVERLOGS_MEMBERADD_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member add public logs.`,
					SERVERLOGS_MEMBERADD_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the member add server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_MEMBERADD_CHANNEL_RESPONSE: channel => `You have set the member add server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_MEMBERREMOVE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member remove server logs.`,
					SERVERLOGS_MEMBERREMOVE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member remove public logs.`,
					SERVERLOGS_MEMBERREMOVE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the member remove server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_MEMBERREMOVE_CHANNEL_RESPONSE: channel => `You have set the member remove server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_CMDRAN_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the command ran server logs.`,
					SERVERLOGS_CMDRAN_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the command ran public logs.`,
					SERVERLOGS_CMDRAN_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the command ran server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_CMDRAN_CHANNEL_RESPONSE: channel => `You have set the command ran server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_TAGRAN_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the tag ran server logs.`,
					SERVERLOGS_TAGRAN_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the tag ran public logs.`,
					SERVERLOGS_TAGRAN_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the tag ran server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_TAGRAN_CHANNEL_RESPONSE: channel => `You have set the tag ran server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_STORY_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the story ran server logs.`,
					SERVERLOGS_STORY_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the story ran public logs.`,
					SERVERLOGS_STORY_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the story ran server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_STORY_CHANNEL_RESPONSE: channel => `You have set the story ran server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_MSGDELETED_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the message delete server logs.`,
					SERVERLOGS_MSGDELETED_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the message delete public logs.`,
					SERVERLOGS_MSGDELETED_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the message delete server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_MSGDELETED_CHANNEL_RESPONSE: channel => `You have set the message delete server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_MSGUPDATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the message update server logs.`,
					SERVERLOGS_MSGUPDATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the message update public logs.`,
					SERVERLOGS_MSGUPDATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the message update server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_MSGUPDATE_CHANNEL_RESPONSE: channel => `You have set the message update server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_EMOJICREATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the emoji create server logs.`,
					SERVERLOGS_EMOJICREATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the emoji create public logs.`,
					SERVERLOGS_EMOJICREATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the emoji create server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_EMOJICREATE_CHANNEL_RESPONSE: channel => `You have set the emoji create server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_EMOJIDELETE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the emoji delete server logs.`,
					SERVERLOGS_EMOJIDELETE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the emoji delete public logs.`,
					SERVERLOGS_EMOJIDELETE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the emoji delete server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_EMOJIDELETE_CHANNEL_RESPONSE: channel => `You have set the emoji delete server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_EMOJIUPDATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the emoji update server logs.`,
					SERVERLOGS_EMOJIUPDATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the emoji update public logs.`,
					SERVERLOGS_EMOJIUPDATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the emoji update server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_EMOJIUPDATE_CHANNEL_RESPONSE: channel => `You have set the emoji update server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_CHANNELCREATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the channel create server logs.`,
					SERVERLOGS_CHANNELCREATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the channel create public logs.`,
					SERVERLOGS_CHANNELCREATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the channel create server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_CHANNELCREATE_CHANNEL_RESPONSE: channel => `You have set the channel create server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_CHANNELDELETE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the channel delete server logs.`,
					SERVERLOGS_CHANNELDELETE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the channel delete public logs.`,
					SERVERLOGS_CHANNELDELETE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the channel delete server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_CHANNELDELETE_CHANNEL_RESPONSE: channel => `You have set the channel delete server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_CHANNELUPDATE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the channel update server logs.`,
					SERVERLOGS_CHANNELUPDATE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the channel update public logs.`,
					SERVERLOGS_CHANNELUPDATE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the channel update server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_CHANNELUPDATE_CHANNEL_RESPONSE: channel => `You have set the channel update server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_SERVERDEAF_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the server deaf server logs.`,
					SERVERLOGS_SERVERDEAF_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the server deaf public logs.`,
					SERVERLOGS_SERVERDEAF_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the server deaf server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_SERVERDEAF_CHANNEL_RESPONSE: channel => `You have set the server deaf server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_SERVERMUTE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the server mute server logs.`,
					SERVERLOGS_SERVERMUTE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the server mute public logs.`,
					SERVERLOGS_SERVERMUTE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the server mute server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_SERVERMUTE_CHANNEL_RESPONSE: channel => `You have set the server mute server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_NICKNAMECHANGED_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the nickname changed server logs.`,
					SERVERLOGS_NICKNAMECHANGED_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the nickname changed public logs.`,
					SERVERLOGS_NICKNAMECHANGED_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the nickname changed server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_NICKNAMECHANGED_CHANNEL_RESPONSE: channel => `You have set the nickname changed server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_MEMBERROLEPERMISSIONSCHANGED_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member pole permissions changed server logs.`,
					SERVERLOGS_MEMBERROLEPERMISSIONSCHANGED_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member pole permissions changed public logs.`,
					SERVERLOGS_MEMBERROLEPERMISSIONSCHANGED_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the member pole permissions changed server logs. The current channel is set as ${channel
							|| 'None'}.`,
					SERVERLOGS_MEMBERROLEPERMISSIONSCHANGED_CHANNEL_RESPONSE: channel => `You have set the member pole permissions changed server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_MEMBERROLEUPDATED_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member role updated server logs.`,
					SERVERLOGS_MEMBERROLEUPDATED_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the member role updated public logs.`,
					SERVERLOGS_MEMBERROLEUPDATED_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the member role updated server logs. The current channel is set as ${channel
							|| 'None'}.`,
					SERVERLOGS_MEMBERROLEUPDATED_CHANNEL_RESPONSE: channel => `You have set the member role updated server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_GUILDBANADD_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the guild ban add server logs.`,
					SERVERLOGS_GUILDBANADD_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the guild ban add public logs.`,
					SERVERLOGS_GUILDBANADD_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the guild ban add server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_GUILDBANADD_CHANNEL_RESPONSE: channel => `You have set the guild ban add server log channel to be ${channel || 'None'}.`,
					SERVERLOGS_GUILDBANREMOVE_STATUS_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the guild ban remove server logs.`,
					SERVERLOGS_GUILDBANREMOVE_PUBLIC_RESPONSE: status => `You have **${status ? 'ENABLED' : 'DISABLED'}** the guild ban remove public logs.`,
					SERVERLOGS_GUILDBANREMOVE_CHANNEL_QUESTION: channel =>
						`Please provide the #channel or channel id for the channel you wish to use for the guild ban remove server logs. The current channel is set as ${channel || 'None'}.`,
					SERVERLOGS_GUILDBANREMOVE_CHANNEL_RESPONSE: channel => `You have set the guild ban remove server log channel to be ${channel || 'None'}.`,
					SERVERLOG_SELECTION_TITLE: 'Please select one of the following server log types by typing the number.',
					SERVERLOG_STATUS_RESPONSE: status => `The server logs system has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					SERVERLOG_CHANNEL_RESPONSE: channel => `The **MAIN** server logs channel has been set to ${channel} channel.`,
					SERVERLOG_SPECIFIC_STATUS_RESPONSE: (status, logType) => `The status for ${logType} logs has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					SERVER_LOG_CHOOSE_MAIN_CHANNEL: 'Which channel would you like to use as the main channel for the server logs?',
					PUBLIC_LOG_STATUS_RESPONSE: status => `The server's Public Logs have been **${status ? 'ENABLED' : 'DISABLED'}**`,
					SERVERLOG_SPECIFIC_PUBLIC_STATUS_RESPONSE: (status, logType) => `The status for ${logType} logs has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					SERVERLOG_SPECIFIC_CHANNEL_RESPONSE: (channel, logType) => `${channel} has been set for the ${logType} logs.`,
					SERVERLOG_OPTIONS: [
						'Create Role',
						'Delete Role',
						'Update Role',
						'Use Command',
						'Use Tag',
						'Use Story',
						'Member Joined',
						'Member Removed',
						'Server Deafen',
						'Server Muted',
						'Nickname Changed',
						'Member Role Permissions Changed',
						'Member Roles Updated',
						'Message Deleted',
						'Message Edited',
						'Emoji Created',
						'Emoji Deleted',
						'Emoji Updated',
						'Channel Created',
						'Channel Deleted',
						'Channel Updated',
						'Member Banned',
						'Member Un-banned'
					],
					SERVERLOG_SUBOPTIONS: (channel, object) => [
						`Channel [ ${channel ? channel.name : 'None'} ]`,
						`Log Publically [ ${object.logPublically ? 'Enabled' : 'Disabled'} ]`,
						`Status [ ${object.status ? 'Enabled' : 'Disabled'} ]`
					],
					MODLOG_MENU_LIST_DATA: (moderation, channels) => [
						`Mod Log Status [${moderation.status ? 'On' : 'Off'}]`,
						`Mod Log Channel [${moderation.channel && channels.get(moderation.channel) ? channels.get(moderation.channel) : 'None'} ]`,
						`Public Log Status [${moderation.publicModlogStatus ? 'On' : 'Off'}]`,
						`Public Log Channel [${moderation.publicModlogChannel && channels.get(moderation.publicModlogChannel) ? channels.get(moderation.publicModlogChannel) : 'None'} ]`,
						`Mod Log Colors`,
						`Server Logs Menu`
					],
					TWITCH_OFFLINE_ALERTS_STATUS: status => `You have successfully ${status ? 'ENABLED' : 'DISABLED'} the offline twitch alerts.`,
					MUTEROLES_MENU_LIST_DATA: (text, voice) => [`Text Muted [ ${text || 'None'} ] `, `Voice Muted [ ${voice || 'None'} ]`],
					NEED_MUTE_ROLE: type => `Please provide a @role or role ID to set as the ${type === 'text' ? 'text' : 'voice'} muted role.`,
					MUTE_ROLE_CREATE_FAIL:
						'It was not possible to create the **Muted Role**. This is usually caused by G4M3R not having the permissions to create roles on the server. If you are still having issues please contact us developers on the G4M3R support server. /n/nhttp://support.g4m3r.xyz',
					MUTE_ROLE_DELETED: type => `The ${type === 'text' ? 'text' : 'voice'} muted role has been deleted from the database.`,
					MUTE_ROLE_ADD_SUCCESS: role => `${role} has been created and all channel permissions are set successfully as the muted role.`,
					MUTE_ROLE_PERMS_FINISHED: noPerms =>
						`${
							noPerms.length
								? `The following channels were unable to be modified due to a lack of permissions. Please make sure the Mute role is not able to view these channels.\n\n${noPerms.join(
									'\n'
								  )}`
								: 'The Mute role has been completely set up for this server. All channels have been modified so they can not be used by anyone once muted.'
						}`,
					MUTE_PATIENCE: 'This may take a few seconds depending on how large your server is. Please bare with me as I prepare your server for the Mute Module, thank you!',
					WELCOME_MENU_LIST_DATA: (hibye, roleMessages) => [
						`Welcome Channel Messages [ **${hibye.welcome.channel ? 'On' : 'Off'}** ]`,
						`Welcome Direct Messages [ **${hibye.welcome.dm ? 'On' : 'Off'}** ]`,
						`Welcome Messages [ **${hibye.welcome.messages.length} Messages** ]`,
						`Goodbye Channel Messages [ **${hibye.goodbye.channel ? 'On' : 'Off'}** ]`,
						`Goodbye Direct Messages [ **${hibye.goodbye.dm ? 'On' : 'Off'}** ]`,
						`Goodbye Messages [ **${hibye.goodbye.messages.length} Messages** ]`,
						`Role Added Messages [ ${roleMessages.add.length} Messages ]`,
						`Role Removed Messages [ ${roleMessages.remove.length} Messages ]`
					],
					WELCOME_DM_RESPONSE: status => `The welcome message in DM has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					GOODBYE_DM_RESPONSE: status => `The goodbye message in DM has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					WELCOME_CHANNEL_RESPONSE: status => `The welcome message in channels has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					GOODBYE_CHANNEL_RESPONSE: status => `The goodbye message in channels has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					WELCOME_DM_STATUS_RESPONSE: status => `The welcome direct messages has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					WELCOME_CATEGORY_STATUS_RESPONSE: category =>
						`The current category of this channel has been ${category ? 'saved' : 'removed'} as the new welcome category for your server.`,
					WELCOME_FIRST_QUESTION:
						'Please type the message or paste the embed code from the embed builder, to set the first message a user sees when they begin the welcome process on your server.',
					WELCOME_FIRST_SET: 'The first message in the welcome system has now been set as:',
					WELCOME_OR_MAIN: 'Which role do you want to update?',
					WELCOME_NO_CHANNEL: 'No channel selected',
					AUTO_ROLE_SUCCESS: role => `You have successfully updated the ${role} role to be auto-assigned when necessary to new members.`,
					AUTO_ROLE_REMOVAL_SUCCESS: `You have successfully removed the auto-assign role.`,
					GOODBYE_DM_STATUS_RESPONSE: status => `The goodbye direct messages has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					CREATE_EDIT_MESSAGE: 'Choose to create a new message or edit an existing message',
					NEW_MESSAGE: 'Please type the new message or code from the embed builder that you would like to you for the new message.',
					NEW_CHANNEL: 'Please type the channel ID or the #channel to send the message to that channel.',
					NEW_ROLE: 'Please type the role ID or the @rolename to save the respective server role.',
					DM_ONLY: 'Please answer if the message should be only send via DM',
					ADD_MESSAGE_SUCCESS:
						'You have successfully saved a new message that will be sent when a member joins the server. To edit the channel or member please edit the new message.',
					NEW_CHANNEL_SUCCESS: 'You have successfully updated the channel for this message.',
					DELETE_MESSAGE_SUCCESS: type => `successfully deleted your selected **${type} messwage**`,
					EDIT_MESSAGE_MENU_LIST_DATA: (message, channelName, noChannelResponse) => [
						`Change Message [ ${message.substring(0, 10)} ]`,
						`Change Channel [ ${channelName || noChannelResponse} ]`
					],
					EDIT_ROLE_MESSAGE_MENU_LIST_DATA: (role, message, channel, dm, noRoleResponse) => [
						`Role [${role || noRoleResponse}]`,
						`Change Message [ ${message.substring(0, 10)} ]`,
						`Change Channel [ ${channel || 'no channel selected'} ]`,
						`Direct Message only [ ${dm ? 'On' : 'Off'} ]`
					],
					ROLE_MESSAGE_MISSING_ROLE: 'Please select a new role',
					ROLE_MESSAGE_SHOW_MESSAGE: '**This is your current Role Message:**',
					ADD_EDIT_ROLE_MESSAGE_SUCCESS: [
						'You have successfully saved or edited a Role Message that will be sent to a member when they get or lose a role on the server.',
						'',
						'To edit the channel, Direct Message option or message please edit the message.'
					].join('\n'),
					CREATE_EDIT_ROLE_MESSAGE: 'Choose to create a new role message or edit an existing one',
					AUTOMOD_MENU_LIST_DATA: (autoRole, moderation) => [
						`Auto-Assign Main Role [ ${autoRole || 'None'} ]`,
						`Capital Spam Filter [ ${moderation.capitalPercentage.status ? 'On' : 'Off'} ]`,
						`Capital Percentage [ ${moderation.capitalPercentage.amount || 100} ]`,
						`Naughty Words Status [ ${moderation.naughtyWords.status ? 'On' : 'Off'} ]`,
						`Naughty Words [ ${moderation.naughtyWords.words.length || 'None'} ]`,
						`**STRICT** Naughty Words [ ${moderation.naughtyWords.strictWords.length || 'None'} ]`,
						`Link Filter Whitelisted`,
						`Unique Role Sets`
					],
					PERMISSION_LEVEL_CHOICE: level => `You have set the permission required as ${level}.`,
					NAUGHTY_FILTER_NO_WORDS: 'There are no filtered words at this time.',
					NAUGHTY_FILTER_STATUS_TOGGLED: status => `The naughty filter has now been **${status ? 'enabled' : 'disabled'}** on this server.`,
					NAUGHTY_FILTER_RESPONSE: (added, removed) =>
						`${added.length ? `The following words have been **added** as naughty words.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following words have been **removed** as naughty words.\n\n${removed.join('\n')}` : ''
						}`,
					LINK_FILTER_LIST_DATA: linkFilter => [
						`Link Filter Status [ ${linkFilter.status ? 'Enabled' : 'Disabled'} ]`,
						`Whitelisted Channels`,
						'Whitelisted Roles',
						'Whitelisted Users',
						'Whitelisted URLS'
					],
					LINK_FILTER_WHITELISTED_CHANNELS: (added, removed) =>
						`${added.length ? `The following channels have been **added** as whitelisted channels for links.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following channels have been **removed** as whitelisted channels for links.\n\n${removed.join('\n')}` : ''
						}`,
					LINK_FILTER_WHITELISTED_ROLES: (added, removed) =>
						`${added.length ? `The following roles have been **added** as whitelisted roles for links.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following roles have been **removed** as whitelisted roles for links.\n\n${removed.join('\n')}` : ''
						}`,
					LINK_FILTER_WHITELISTED_USERS: (added, removed) =>
						`${added.length ? `The following users have been **added** as whitelisted users for links.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following users have been **removed** as whitelisted users for links.\n\n${removed.join('\n')}` : ''
						}`,
					LINK_FILTER_WHITELISTED_URLS: (added, removed) =>
						`${added.length ? `The following urls have been **added** as whitelisted urls for links.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following urls have been **removed** as whitelisted urls for links.\n\n${removed.join('\n')}` : ''
						}`,
					LINK_FILTER_STATUS_RESPONSE: status => `The link filter has now been **${status ? 'activated' : 'deactivated'}**`,
					LINK_FILTER_CHOOSE_TARGET: (type, currentList) =>
						`Please provide the ${type} that you would like to allow the use of links.${
							currentList.length ? `\n\nYour current whitelist for ${type} is ${currentList.join(', ')}` : ''
						}`,
					LINK_FILTER_UPDATED: (added, target) => `You have successfully **${added ? 'added' : 'removed'}** a whitelist target. [ ${target} ]`,
					NAUGHTY_STATUS_RESPONSE: status => `The naughty word filter is now **${status ? 'activated' : 'deactivated'}**.`,
					NAUGHTY_WORD_QUESTION: currentWords =>
						`Please type the words you would like to add to or remove on the naughty filter. Your current naughty words are:\n\n${currentWords || 'No Current Words'}`,
					NAUGHTY_WORD_DELETE: word => `**${word}** has been removed from the filter list.`,
					DEFAULT_MOD_MENU_LIST_DATA: moderation => [
						`Max. Warnings [${moderation.maxNoWarnings}]`,
						`Max. Inactive Time [${moderation.maxInactivityTime} Days]`,
						`Roles To Ignore [${moderation.modIgnoredRoles ? moderation.modIgnoredRoles.length : 0}]`,
						`Inactivity Role [${moderation.defaultInactivityRole ? moderation.defaultInactivityRole.name : 'No Role Selected.'}]`,
						`Max. Warnings Role [${moderation.defaultMaxWarningsRole ? moderation.defaultMaxWarningsRole.name : 'No Role Selected.'}]`
					],
					NEED_AUTOROLE: `Please provide the role ID or @role to use as the auto-assign role.`,
					VERIFY_MENU_LIST_DATA: (verify, categoryName, roleName) => [
						`Verify Status [ ${verify.status ? 'On' : 'Off'} ]`,
						`Verify Category [ ${categoryName || 'Not Set'} ]`,
						`Verify First Message [ ${verify.first ? 'Set' : 'Not Set'} ]`,
						`Verify Role [ ${roleName || 'Not Set'} ]`,
						`Reset Verification System`
					],
					VERIFY_STATUS_RESPONSE: status => `The verification system has been **${status ? 'ENABLED' : 'DISABLED'}**.`,
					VERIFY_CATEGORY_QUESTION: current =>
						`What would you like to set as the verification system category? ${
							current ? `The current category channel is ${current}.` : 'There is no category channel currently assigned.'
						}`,
					VERIFY_CATEGORY_STATUS_RESPONSE: category => `The category of this channel has been ${category ? 'saved' : 'removed'} as the new verification category for your server.`,
					VERIFY_ROLE_QUESTION: role =>
						`Please provide the @role, role id or the role name of the role you would like to use as the verification role. **NOTE:** This is a very advanced level setting. Please be careful when editing this. It is recommened to use the bot automated verification setup to have the role set up for you properly.\n\nThe current verification role is ${role}`,
					VERIFY_ROLE_RESPONSE: role => `The ${role} has been set as the verification role.`,
					VERIFY_ROLE_OPTIONS: ['Create [ Auto-create and setup permissions ]', 'Provide existing role'],
					PICK_AUTOMOD_PROP: 'Please choose one of the following items to edit',
					AUTOSPAM_STATUS_RESPONSE: (status, type) => `The auto-moderation for ${type} has been ${status ? 'enabled' : 'disabled'}.`,
					CAPITAL_SUCCESS: amount => `You have **successfully changed** the maximum capital percentage per message allowed to be **${amount} %**.`,
					NEED_CAPITAL_AMOUNT: 'What is the **maximum percentage amount** of CAPITAL letters you would like to allow in messages?\n\nNumber must be between 60-100.',
					NEED_VERIFY_ROLE:
						'Please type the role ID or @role to use as the verification role which prevents new members in the server from seeing all channels except the main verification channel.',
					VERIFY_PATIENCE:
						'This may take a few seconds depending on how large your server is. Please bare with me as I prepare your server for the verification system. Thank you!',
					VERIFY_ROLE_SUCCESS: role => `You have successfully updated the ${role} role to be auto-assigned to new members for the verification process.`,
					VERIFY_NO_CATEGORY: 'Sorry, you can not add a role unless you have an existing category set up for the verify system',
					VERIFY_CATEGORY_NAME: 'Verification Zone',
					VERIFY_MAIN_CHANNEL_NAME: 'Verify',
					VERIFY_DELETE_CATEGORY: categoryName => `Do you want to delete the category \`${categoryName}\`?`,
					VERIFY_CATEGORY_SUCCESS: 'Successfully created the Verification Zone category.',
					VERIFY_RESET_SUCCESS: [
						'Successfully reset the Verification Channels and Role in my database. Would you also like me to delete all the stuff created by the Verification Process?'
							+ ' (Channels, ROle, Category)',
						'',
						'Option 1: React with <:green_tick:448103896897028096> to delete everything',
						'Option 2: React with <:ok:448105761482997771> to delete everything **BUT NOT** the category channel',
						'Option 3: React with <:red_tick:448082952824422400> to skip cleaning the server.'
					].join('\n'),
					VERIFY_RESET_NEED_ADMIN: [
						'Successfully reset the Verification Channels and Role in my database. However I was unable to clean up the remaining role and'
							+ ' channels for you, as I am missing the **ADMINISTRATOR** permission to be able to do this.',
						'',
						'For now please be as kind to remove the role and channels yourself, however if you give me the administrator permissions I will be able to remove roles / channels next time!'
					].join('\n'),
					VERIFY_DELETE_SUCCESS: 'Successfully deleted the Verification Channels and Role on the server.',
					VERIFY_DELETE_DENIED: 'Ok. I understand your decision to **not** delete the verifications channels and the verification role.',
					ROLE_PERMS_FINISHED: noPerms =>
						`${
							noPerms.length
								? `The following channels were unable to be modified due to a lack of permissions. Please make sure the Verify role is not able to view these channels.\n\n${noPerms.join(
									'\n'
								  )}`
								: 'The Verify role has been completely set up for this server. All channels have been modified so they can not be viewed by anyone with the `Verify` role.'
						}`,
					MODMAILS_MENU_LIST_DATA: (mail, permLvl) => [
						`Status [${mail.activated ? 'On' : 'Off'}]`,
						`Permission To Reply [${permLvl}]`,
						`Max Mails Per User [ ${mail.maxMailPerUser} ]`,
						`Max Mails Per Guild [ ${mail.maxMailsTotal} ]`
					],
					MODMAILS_STATUS_RESPONSE: activated => `The mod mail system has been **${activated ? 'ENABLED' : 'DISABLED'}**.`,
					GENERAL_MENU_LIST_DATA: config => [
						`Default Timezone [${config.timezone}]`,
						`Menu Closing Time [${config.menuTime}]`,
						`Use 24h time format [${config.general.militaryTimeFormat ? 'On' : 'Off'}]`,
						`Allow AFK Responses [ ${config.allowAfkResponses === 1 ? 'All Members' : config.allowAfkResponses === 2 ? 'Mods + Admins' : 'Admins Only'} ]`,
						'Notifications',
						'Feedback',
						`Track Server Analytics [${config.general.trackAnalytics ? 'On' : 'Off'}]`,
						'Leveling System',
						`Disable Global Bot Mod & Dev Perms [ ${config.denyGlobalBotModAndDevPerms ? 'On' : 'Off'} ]`
					],
					PRIVACY_ENABLED: status => `You have successfully ${status ? 'enabled' : 'disabled'} the global bot and mod perms on your server.`,
					AFK_PERMISSION_QUESTION: current =>
						`What would you like to set the necessary permission required to have AFK Messages on your server?\nYour current level is set as **${current}**`,
					NOTIFICATIONS_MENU_LIST_DATA: config => [
						`Delete Notifications [${config.general.deleteNotification ? 'On' : 'Off'}]`,
						`Delete Notifications Time [${config.general.deleteNotificationTime} Seconds]`
						// `Twitch Offline Alerts [ ${config.twitch.offlineAlerts ? 'On' : 'Off'} ]`
					],
					NUMBER_REQUIREMENTS: 'Number Requirements:',
					NUMBER_REQUIREMENTS_QUESTION: (min, max) => `Please enter a number ${min ? `more than ${min}${max ? ' and ' : ''}` : ''}${max ? `less than ${max}` : ''}`,
					EVENTS_MENU_LIST_DATA: (events, duration, reminder, channel, permissionLevels) => [
						`Create Permission [ ${permissionLevels.find(perm => perm.id === events.permissions.create).value} ]`,
						`Add Member Permission [${permissionLevels.find(perm => perm.id === events.permissions.add).value}]`,
						`Use Default [${events.useDefault ? 'On' : 'Off'}]`,
						`Type [${events.defaultType}]`,
						`Duration [${duration}]`,
						`Attendees [${events.maxAttendees}]`,
						`Platform [${events.platform}]`,
						`Game [${events.game || 'No Game Specified'} ]`,
						`Advertisement Channel [ ${events.advertiseChannel ? `<#${events.advertiseChannel}>` : 'No advertisement channel'} ]`,
						`Advertise all events [ ${events.advertiseAllEvents ? 'On' : 'Off'} ]`,
						`Default Reminder Time [ ${reminder} ]`,
						`Starts Minutes From Now [ ${events.minutesFromNow} ]`
					],
					EVENTS_MINUTES_FROM_NOW_RESPONSE: amount => `The amount of minutes to wait before starting newly created events has been set as **${amount}** minutes.`,
					EVENTS_PLATFORM_QUESTION: platform =>
						`What is the platform that you would like to set as the default platform for events? Your current default platform is: ${platform}.`,
					EVENTS_PLATFORM_RESPONSE: platform => `You have successfully set ${platform} as the platform for events on this server.`,
					EVENTS_GAME_QUESTION: game => `What is the game that you would like to set as the default game for events? Your current default game is: ${game}.`,
					EVENTS_GAME_RESPONSE: game => `You have successfully set ${game} as the game for events on this server.`,
					EVENTS_TYPE_QUESTION: type => `What is the type that you would like to set as the default type for events? Your current default type is: ${type}.`,
					EVENTS_TYPE_RESPONSE: type => `You have successfully set ${type} as the type for events on this server.`,
					EVENTS_DURATION_QUESTION: duration =>
						`What is the default duration that you would like to set as the default game for events? Your current default duration time is: ${duration} minutes.`,
					EVENTS_DURATION_RESPONSE: duration => `You have successfully set ${duration} minutes as the duration time for events on this server.`,
					EVENTS_REMINDER_QUESTION: reminder =>
						`What is the reminder time that you would like to set as the default reminder time for events? Your current default reminder time is: ${reminder}.`,
					EVENTS_REMINDER_RESPONSE: reminder => `You have successfully set ${reminder} as the default duration for events on this server.`,
					EVENTS_CREATE_QUESTION: perm =>
						`What is the permission level that you would like to require to create events on this server. Your current permission required to create events on this server is ${perm}`,
					EVENTS_CREATE_RESPONSE: perm => `You have successfully set ${perm} as the permission level required to create events on this server.`,
					EVENTS_ADD_QUESTION: perm =>
						`What is the permission level that you would like to require to add members to events on this server. Your current permission required to add members to events on this server is ${perm}`,
					EVENTS_ADD_RESPONSE: perm => `You have successfully set ${perm} as the permission level required to add members to events on this server.`,
					EVENTS_USE_DEFAULT_STATUS: useDefault => `You have **${useDefault ? 'DISABLED' : 'ENABLED'}** using the default options for events.`,
					EVENTS_STATUS_RESPONSE: activated => `Advertisement of all events after creation is now **${!activated ? 'ENABLED' : 'DISABLED'}**.`,
					TAGS_MENU_LIST_DATA: (permissionLevel, tags) => [
						`Allow tag creation / removal [ ${permissionLevel.find(level => level.id === tags.allowCreation).value} ]`,
						`Allow tag usage [ ${permissionLevel.find(level => level.id === tags.allowUsage).value} ]`,
						`Delete tag trigger [ ${tags.tagDeletion ? 'On' : 'Off'} ]`,
						`Disabled Channels [ ${tags.disabledChannels.length || 'None'} ]`
					],
					STORIES_MENU_LIST_DATA: (creation, usage, stories) => [
						`Allow stories creation / removal [ ${creation} ]`,
						`Allow stories usage [ ${usage} ]`,
						`Delete stories trigger [ ${stories.storyDeletion ? 'on' : 'off'} ]`,
						`Disabled Channels [ ${stories.disabledChannels.length || 'None'} ]`
					],
					TAGS_DELETE_STATUS: tagDeletion => `Tag trigger deletion has been **${tagDeletion ? 'ENABLED' : 'DISABLED'}**.`,
					STORIES_DELETE_STATUS: storyDeletion => `Stories trigger deletion has been **${storyDeletion ? 'ENABLED' : 'DISABLED'}**.`,
					DEFAULT_MENU_LIST_DATA: (prefix, language, admins) => [`Prefix [${prefix}]`, `Personality/Language [ ${language} ]`, `Admins [${admins}]`, `Moderation`, `General`, `Events`, `Tags & Stories`, 'Surveys'],
					SURVEY_MENU_LIST_DATA: survey => [
						`Accept Emoji: [ ${survey.acceptEmoji} ]`,
						`Reject Emoji: [ ${survey.rejectEmoji} ]`,
						`Accept Message: [ ${survey.acceptMessage ? 'Set' : 'None'} ]`,
						`Reject Message: [ ${survey.rejectMessage ? 'Set' : 'None'} ]`
					],
					SURVEY_ACCEPTEMOJI_QUESTION: emoji => `What would like to set as ACCEPT emoji for surveys? ${emoji ? `The current emoji is ${emoji}.` : ''}`,
					SURVEY_ACCEPTEMOJI_RESPONSE: emoji => `You have set the emoji for the ACCEPT emoji for surveys to be ${emoji}.`,
					SURVEY_REJECTEMOJI_QUESTION: emoji => `What would like to set as REJECT emoji for surveys? ${emoji ? `The current emoji is ${emoji}.` : ''}`,
					SURVEY_REJECTEMOJI_RESPONSE: emoji => `You have set the emoji for the REJECT emoji for surveys to be ${emoji}.`,
					SURVEY_ACCEPTMESSAGE_QUESTION: response =>
						`What would like to set as the accepted message for surveys? ${response ? `The current accepted message is:\n\n${response}.` : ''}`,
					SURVEY_ACCEPTMESSAGE_RESPONSE: response => `You have set the accepted message for surveys to be ${response}.`,
					SURVEY_REJECTMESSAGE_QUESTION: response =>
						`What would like to set as the rejected message for surveys? ${response ? `The current rejected message is:\n\n${response}.` : ''}`,
					SURVEY_REJECTMESSAGE_RESPONSE: response => `You have set the rejected message for surveys to be ${response}.`,
					TOURNEY_MENU_LIST_DATA: (tournaments, duration, appDuration) => [
						`Game: [ ${tournaments.game} ]`,
						`Game Mode: [ ${tournaments.gameMode} ]`,
						`Max Teams Allowed: [ ${tournaments.maxTeamsAllowed} ]`,
						`Type: [ ${tournaments.type} ]`,
						`Best of: [ ${tournaments.bestOf} ]`,
						`Duration: [ ${duration} ]`,
						`Applications Duration: [ ${appDuration} ]`,
						`Organizer Role: [ <@&${tournaments.organizerRoleID}> ]`,
						`Repeat: [ ${tournaments.repeat ? 'On' : 'Off'} ]`,
						`Application Channel: [ <#${tournaments.applicationChannelID}> ]`,
						`Application Name: [ ${tournaments.application} ]`
					],
					TOURNEY_GAME_QUESTION: current => `What would you like to set the game for newly created tournaments on this server? Your current game is set as **${current}**`,
					TOURNEY_GAME_RESPONSE: value => `You have successfully set the default game for newly created tournaments as **${value}**.`,
					TOURNEY_GAMEMODE_QUESTION: current =>
						`What would you like to set the game mode for newly created tournaments on this server? Your current game mode is set as **${current}**`,
					TOURNEY_GAMEMODE_RESPONSE: value => `You have successfully set the default game mode for newly created tournaments as **${value}**.`,
					TOURNEY_TYPE_QUESTION: current => `What would you like to set the type for newly created tournaments on this server? Your current type is set as **${current}**`,
					TOURNEY_TYPE_RESPONSE: value => `You have successfully set the default type for newly created tournaments as **${value}**.`,
					TOURNEY_MAXTEAMSALLOWED_QUESTION: current =>
						`What would you like to set the amount of max teams allowed for newly created tournaments on this server? Your current amount of max teams allowed is set as **${current}**`,
					TOURNEY_MAXTEAMSALLOWED_RESPONSE: value => `You have successfully set the default amount of max teams allowed for newly created tournaments as **${value}**.`,
					TOURNEY_BESTOF_QUESTION: current => `What would you like to set the best of for newly created tournaments on this server? Your current best of is set as **${current}**`,
					TOURNEY_BESTOF_RESPONSE: value => `You have successfully set the default best of for newly created tournaments as **${value}**.`,
					TOURNEY_DURATION_QUESTION: current =>
						`What would you like to set the duration for newly created tournaments on this server? Your current duration is set as **${current}**`,
					TOURNEY_DURATION_RESPONSE: value => `You have successfully set the default duration for newly created tournaments as **${value}**.`,
					TOURNEY_APPLICATIONDURATION_QUESTION: current =>
						`What would you like to set the application duration for newly created tournaments on this server? Your current application duration is set as **${current}**`,
					TOURNEY_APPLICATIONDURATION_RESPONSE: value => `You have successfully set the default application duration for newly created tournaments as **${value}**.`,
					TOURNEY_ORGANIZERROLEID_QUESTION: current =>
						`What would you like to set the organizer role for newly created tournaments on this server? Your current organizer role is set as ${current}`,
					TOURNEY_ORGANIZERROLEID_RESPONSE: value => `You have successfully set the default organizer role for newly created tournaments as ${value}.`,
					TOURNEY_APPLICATIONCHANNELID_QUESTION: current =>
						`What would you like to set the application channel for newly created tournaments on this server? Your current application channel is set as ${current}`,
					TOURNEY_APPLICATIONCHANNELID_RESPONSE: value => `You have successfully set the default application channel for newly created tournaments as ${value}.`,
					TOURNEY_APPLICATION_QUESTION: current =>
						`What would you like to set theapplicatione for newly created tournaments on this server? Your current application is set as **${current}**`,
					TOURNEY_APPLICATION_RESPONSE: value => `You have successfullyapplication the default type for newly created tournaments as **${value}**.`,
					PREFIX_QUESTION: prefix => `what would you like the bot's prefix to be on this server? \n\nYour current prefix is \`${prefix}\``,
					PREFIX_CHANGED: newPrefix => `your **prefix** has been changed to \`${newPrefix}\``,
					ADMINS_QUESTION: admins => `Your current admins are:\n\n${admins}. \n\nPlease provide a **@user** or a **user ID** to add or remove them.`,
					ADMINS_NONE: 'There are no admins currently.\n\nPlease provide a **@user** or a **user ID** to add or remove them.',
					ADMINS_RESPONSE: (added, removed) =>
						`${added.length ? `The following members have been **added** as admins for the G4M3R bot.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following members have been removed as admins from the G4M3R bot.\n\n${removed.join('\n')}` : ''
						}`,
					ADMINS_NO_BOT: member => `${member} **cannot be added** since this is a **Bot User** that cant be an admin of this bot.`,
					MODCHANNEL_QUESTION: channel => `Please set a new channel by #channel-name or a channel ID.${channel ? ` Your current mod channel is ${channel}.` : ''}`,
					MODCHANNEL_RESPONSE: (newChannel, isPublic) => `${newChannel} has been set as the ${isPublic ? 'public log' : 'mod-log'} channel.`,
					PUBLIC_LOG_CHANNEL_QUESTION: channel => `Please set a new channel by #channel-name or a channel ID.${channel ? `Your current public log channel is ${channel}.` : ''}`,
					PUBLIC_LOG_CHANNEL_RESPONSE: channel => `${channel} has been set as the public log channel.`,
					PERMISSION_LEVELS: 'Permission Levels:',
					MODROLES_NONE: 'You currently have no mod roles set.',
					MODLOG_COLORS_MENU: moderation => [
						`Warn Color [ ${moderation.colorWarn} }`,
						`Mute Color [ ${moderation.colorMute} ]`,
						`Unmute Color [ ${moderation.colorUnmute} ]`,
						`Kick Color [ ${moderation.colorKick} ]`,
						`Ban Color [ ${moderation.colorBan} ]`,
						`Unban Color [ ${moderation.colorUnban} ]`
						// `Mail Closed Color [ ${moderation.colorMailClosed} ]`,
					],
					MODLOG_COLORS_QUESTION: (type, color) => `What color would you like to use for ${type} mod logs. The current color is set to ${color}`,
					MODLOG_COLORS_RESPONSE: color => `You have set the color to ${color}`,
					MODLOG_COLORS_TYPE_QUESTION: 'Which type of mod log would you like to change the color for?',
					MODLOG_COLORS_HEX_QUESTION: (type, moderation) =>
						[
							`What is the HEX color you would like to use for **${type.toUpperCase()}** mod logs.`,
							'',
							'',
							'**CURRENT COLORS**',
							'',
							`[ 'warn' ] ${moderation.colorWarn}`,
							`[ 'kick' ] ${moderation.colorKick}`,
							`[ 'ban'  ] ${moderation.colorBan}`,
							`[ 'mute'  ] ${moderation.colorMute}`,
							`[ 'unmute'  ] ${moderation.colorUnmute}`,
							'',
							'',
							'**__EXAMPLE__**',
							'',
							'• #color-hex-code (e.g. #FFFFFF)'
						].join('\n'),
					MODOLOG_COLORS_RESPONSE: (hex, key) => `${hex} has been set as the color for ${key} modlogs.`,
					MODROLES_QUESTION: modRoles =>
						modRoles.length
							? `Your current moderation roles that are allowed to use moderation commands:\n\nTo add or remove a role, please provide a @role or role ID.\n\n${modRoles.join(
								'\n'
							  )}`
							: 'You do not have any moderation roles. Please provide a @role or role ID to enable moderation commands.',
					MODROLES_RESPONSE: (added, removed) =>
						`${added.length ? `The following roles have been **added** as moderation roles.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following roles have been **removed** from moderation roles.\n\n${removed.join('\n')}` : ''
						}`,
					MODMAX_WARN_QUESTION: maxNoWarnings =>
						`Please set a default new maximum amount for warnings for the special moderation command. Your current max. amount of warnings is: ${maxNoWarnings}`,
					MODMAX_WARN_RESPONSE: newMax => `${newMax} has been set as your new default max. amount of warnings for the special moderation command.`,
					MODMAX_INACTIVE_QUESTION: inactivity =>
						`Please set a new default maximum amount of inactivity time (in days) for the special moderation command to be used. Current max. days of inactivity are: ${inactivity} Days`,
					MODMAX_INACTIVE_RESPONSE: newMax => `${newMax} has been set as your default max. amount of inactive days for the special moderation command.`,
					MODIGNORE_ROLES_QUESTION: roles =>
						roles.length
							? `Your currently ignored roles regarding special moderation:\n\n${roles.join('\n')}`
							: 'You do not have any ignored roles. Please provide a @role or role ID.',
					MODIGNORE_ROLES_RESPONSE: (chosenRole, roles) => `${chosenRole} has been **${roles.includes(chosenRole.id) ? 'REMOVED' : 'ADDED'}** to your Mod Roles.`,
					MODROLE_MENU_QUESTION: (inactiveRole, maxWarnRole) => [
						`Role Assigned For **Inactive** Members: ${inactiveRole ? inactiveRole.name : 'No Current Role'}`,
						`Role Assigned For **Max. Warnings** reached: ${maxWarnRole ? maxWarnRole.name : 'No Role'}`
					],
					MODROLE_MENU_CURRENT_QUESTION: (isInactive, moderation) =>
						`Current ${isInactive ? 'Inactive' : 'Max. Warning'} Role:\n\n${
							moderation[isInactive ? 'defaultInactivityRole' : 'defaultMaxWarningsRole']
						} : 'You do not have any moderation roles. Please provide a @role or role ID to enable default moderation role system.`,
					MODROLE_MENU_RESPONSE: (selectedRole, savedRole, isInactive) =>
						`${selectedRole} has been ${savedRole === selectedRole.id ? '**REMOVED**' : '**ADDED**'} as the ${
							isInactive ? 'default inactive role.' : 'default max. warnings role.'
						}`,
					PERMISSIONS_MESSAGE: (type, permissions, index) => `The permission for **${type}** has been set to **${permissions[index]}**`,
					MODMAIL_MAX_MENU_GUILD_USER_QUESTION: 'Would you like to edit the maximum amount of mails for Guilds or Users?',
					MODMAIL_MAX_MENU_OPTIONS: mail => [
						`**Guilds**: Maximum amount of mails able to be received [${mail.maxMailsTotal}]`,
						`**Users**: Maximum amount of mails able to send [${mail.maxMailPerUser}]`
					],
					MODMAIL_MAX_QUESTION: (isGuild, mail) => `Please set a new maximum amount of mod mails a ${isGuild ? 'guild' : 'user'} can have at the same time.\n\n
					Your current maximum amount of mod mails per ${isGuild ? 'guild' : 'user'} is: ${mail[isGuild ? 'maxMailsTotal' : 'maxMailPerUser']}`,
					MODMAIL_MAX_RESPONSE: (isGuild, newAmount) => `The maximum amount of mails a ${isGuild ? 'guild' : 'user'} can send has now been set as ${newAmount}.`,
					GENERAL_TIMEZONE_REQUEST: timezone =>
						[
							`Please enter your exact timezone or a search term`,
							'',
							'Your currently selected **default timezone is:**',
							'',
							timezone,
							'',
							'**There are 2 options to enter the timezone:**',
							'  • type a *search term* like "Berlin" and select from a list',
							'  • type the *exact timezone* like "Europe/Berlin"',
							'',
							'All possible timelines can be found here: ',
							'https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'
						].join('\n'),
					GENERAL_TIMEZONE_SELECTION_TITLE: 'Please select one of the following timezones by typing the number:',
					GENERAL_TIMEZONE_RESPONSE: newTimezone => `The timezone has been set to **${newTimezone}**`,
					GENERAL_CLOSING_TIME_QUESTION: menuTime =>
						[
							'Please enter in seconds how long the G4M3R menu is allowed to stay open without an answer.',
							'Remember: you are only setting a maximum. Each user can still have a faster menu closing time.',
							'',
							`**Your currently set menu closing time is: **\n${menuTime} Seconds`
						].join('\n'),
					GENERAL_CLOSING_TIME_RESPONSE: newAmount => `The menu has been set to close at a maximum of **${newAmount} seconds**`,
					GENERAL_BURN_MESSAGE: newStatus => `The automatic deletion of the NUKE response message has been **${!newStatus ? 'ENABLED' : 'DISABLED'}**.`,
					GENERAL_MILITARY_TIME_MESSAGE: military => `The 24h time format has been **${!military ? 'ENABLED' : 'DISABLED'}**.`,
					GENERAL_DELETE_NOTIFICATIONS: newStatus => `The automatic deletion of the notification response messages has been **${newStatus ? 'ENABLED' : 'DISABLED'}**.`,
					GENERAL_DELETE_NOTIFICATION_TIME_QUESTION: inactivity =>
						`Please set a new default maximum time (in seconds) for the notification response messages of the bot to be deleted. Current: ${inactivity} Seconds`,
					GENERAL_DELETE_NOTIFICATION_TIME_RESPONSE: newMax =>
						`${newMax} has been set as your default maximum amount of seconds before deleting the bots notification response messages.`,
					FEEDBACK_MENU_LIST_DATA: feedback => [
						`Ideas Status [ ${feedback.idea.status ? 'On' : 'Off'} ]`,
						`Ideas Channel [ ${this.client.channels.has(feedback.idea.channel) ? this.client.channels.get(feedback.idea.channel).name : 'Channel not available'} ]`,
						`Ideas Color [ ${feedback.idea.color} ]`,
						`Ideas Thumbs Up Emoji [ ${feedback.idea.thumbsUp} ]`,
						`Ideas Thumbs Down Emoji [ ${feedback.idea.thumbsDown} ]`,
						`Ideas Alternatives [ ${feedback.idea.allowedActions.length}]`,
						`Ideas Questions [ ${feedback.idea.questions.length}]`,
						`Ideas Solved Message [ ${feedback.idea.solvedMessage ? 'Set' : 'None'} ]`,
						`Ideas Denied Message [ ${feedback.idea.deniedMessage ? 'Set' : 'None'} ]`,
						`Ideas XP Thumbs Up [ ${feedback.idea.xpUp} ]`,
						`Ideas XP Thumbs Down [ ${feedback.idea.xpDown} ]`,
						`Ideas XP Solved [ ${feedback.idea.xpSolved} ]`,
						`Ideas XP Denied [ ${feedback.idea.xpDenied} ]`,
						`Bugs Status [ ${feedback.bug.status ? 'On' : 'Off'} ]`,
						`Bugs Channel [ ${this.client.channels.has(feedback.bug.channel) ? this.client.channels.get(feedback.bug.channel).name : 'Channel not available'} ]`,
						`Bugs Color [ ${feedback.bug.color} ]`,
						`Bugs Thumbs Up Emoji [ ${feedback.bug.thumbsUp} ]`,
						`Bugs Thumbs Down Emoji [ ${feedback.bug.thumbsDown} ]`,
						`Bugs Alternatives [ ${feedback.bug.allowedActions.length}]`,
						`Bugs Questions [ ${feedback.bug.questions.length}]`,
						`Bugs Solved Message [ ${feedback.bug.solvedMessage ? 'Set' : 'None'} ]`,
						`Bugs Denied Message [ ${feedback.bug.deniedMessage ? 'Set' : 'None'} ]`,
						`Bugs XP Thumbs Up [ ${feedback.bug.xpUp} ]`,
						`Bugs XP Thumbs Down [ ${feedback.bug.xpDown} ]`,
						`Bugs XP Solved [ ${feedback.bug.xpSolved} ]`,
						`Bugs XP Denied [ ${feedback.bug.xpDenied} ]`
					],
					IDEA_CHANNEL_QUESTION: currentChannel => `What would like to set as the idea feedback channel? ${currentChannel ? `The current channel is ${currentChannel}.` : ''}`,
					BUG_CHANNEL_QUESTION: currentChannel => `What would like to set as the bug feedback channel? ${currentChannel ? `The current channel is ${currentChannel}.` : ''}`,
					IDEA_CHANNEL_RESPONSE: channel => `You have set the channel for the **idea** feedback to be ${channel}.`,
					BUG_CHANNEL_RESPONSE: channel => `You have set the channel for the **bug** feedback to be ${channel}.`,
					IDEA_COLOR_QUESTION: currentColor => `What would like to set as the idea feedback color? ${currentColor ? `The current color is ${currentColor}.` : ''}`,
					BUG_COLOR_QUESTION: currentColor => `What would like to set as the bug feedback color? ${currentColor ? `The current color is ${currentColor}.` : ''}`,
					IDEA_COLOR_RESPONSE: color => `You have set the color for the **idea** feedback to be ${color}.`,
					BUG_COLOR_RESPONSE: color => `You have set the color for the **bug** feedback to be ${color}.`,
					IDEA_THUMBSUP_QUESTION: currentEmoji => `What would like to set as the Thumbs Up for idea feedback color? ${currentEmoji ? `The current color is ${currentEmoji}.` : ''}`,
					BUG_THUMBSUP_QUESTION: currentEmoji => `What would like to set as Thumbs Up for the bug feedback color? ${currentEmoji ? `The current color is ${currentEmoji}.` : ''}`,
					IDEA_THUMBSUP_RESPONSE: emoji => `You have set the emoji for the Thumbs Up for **idea** feedback to be ${emoji}.`,
					BUG_THUMBSUP_RESPONSE: emoji => `You have set the emoji for the Thumbs Up for **bug** feedback to be ${emoji}.`,
					IDEA_THUMBSDOWN_QUESTION: currentEmoji =>
						`What would like to set as the Thumbs Down for idea feedback emoji? ${currentEmoji ? `The current emoji is ${currentEmoji}.` : ''}`,
					BUG_THUMBSDOWN_QUESTION: currentEmoji =>
						`What would like to set as the Thumbs Down for bug feedback emoji? ${currentEmoji ? `The current emoji is ${currentEmoji}.` : ''}`,
					IDEA_THUMBSDOWN_RESPONSE: emoji => `You have set the emoji for the Thumbs Down for **idea** feedback to be ${emoji}.`,
					BUG_THUMBSDOWN_RESPONSE: emoji => `You have set the emoji for the Thumbs Down for **bug** feedback to be ${emoji}.`,
					IDEA_ALLOWEDACTIONS_QUESTION: current =>
						`Please type all the actions you would like to add ${current.length ? 'or remove' : ''} for **ideas** feedback.${
							current.length ? `The current allowed actions are:\n\n ${current.join('\n')}` : ''
						}`,
					BUG_ALLOWEDACTIONS_QUESTION: current =>
						`Please type all the actions you would like to add ${current.length ? 'or remove' : ''} for **bugs** feedback.${
							current.length ? `The current allowed actions are:\n\n ${current.join('\n')}` : ''
						}`,
					IDEA_ALLOWEDACTIONS_RESPONSE: (added, removed) =>
						`${added.length ? `The following words have been **added** as allowed actions for idea feedback.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following words have been **removed** as allowed actions for idea feedback.\n\n${removed.join('\n')}` : ''
						}`,
					IDEA_QUESTIONS_QUESTION: current =>
						`Please type the question you would like to add ${current.length ? 'or remove' : ''} for **ideas** feedback.${
							current.length ? `The current questions are:\n\n ${current.map((c, i) => `${i + 1}. ${c}`).join('\n')}` : ''
						}`,
					BUG_QUESTIONS_QUESTION: current =>
						`Please type the question you would like to add ${current.length ? 'or remove' : ''} for **bugs** feedback.${
							current.length ? `The current questions are:\n\n ${current.map((c, i) => `${i + 1}. ${c}`).join('\n')}` : ''
						}`,
					IDEA_QUESTIONS_RESPONSE: (added, removed) =>
						`${added.length ? `The following question has been **added** as questions for idea feedback.\n\n${added.join('')}\n\n` : ''}${
							removed.length ? `The following question has been **removed** as questions for idea feedback.\n\n${removed.join('')}` : ''
						}`,
					BUG_QUESTIONS_RESPONSE: (added, removed) =>
						`${added.length ? `The following question has been **added** as question for bug feedback.\n\n${added.join('')}\n\n` : ''}${
							removed.length ? `The following question has been **removed** as question for bug feedback.\n\n${removed.join('')}` : ''
						}`,
					IDEA_SOLVEDMESSAGE_QUESTION: response =>
						`What would like to set as the solved message for idea feedback? ${response ? `The current solved message is:\n\n${response}.` : ''}`,
					BUG_SOLVEDMESSAGE_QUESTION: response =>
						`What would like to set as the solved message for bug feedback? ${response ? `The current solved message is:\n\n${response}.` : ''}`,
					IDEA_SOLVEDMESSAGE_RESPONSE: response => `You have set the solved message for **idea** feedback to be ${response}.`,
					BUG_SOLVEDMESSAGE_RESPONSE: response => `You have set the solved message for **bug** feedback to be ${response}.`,
					IDEA_DENIEDMESSAGE_QUESTION: response =>
						`What would like to set as the denied message for idea feedback? ${response ? `The current denied message is:\n\n${response}.` : ''}`,
					BUG_DENIEDMESSAGE_QUESTION: response =>
						`What would like to set as the denied message for bug feedback? ${response ? `The current denied message is:\n\n${response}.` : ''}`,
					IDEA_DENIEDMESSAGE_RESPONSE: response => `You have set the denied message for **idea** feedback to be ${response}.`,
					BUG_DENIEDMESSAGE_RESPONSE: response => `You have set the denied message for **bug** feedback to be ${response}.`,
					IDEA_XPUP_QUESTION: xp => `How much XP should be given for a thumbs up vote for idea feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					BUG_XPUP_QUESTION: xp => `How much XP should be given for a thumbs up vote for bug feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					IDEA_XPUP_RESPONSE: xp => `You have set the XP on thumbs up vote for **idea** feedback to be ${xp}.`,
					BUG_XPUP_RESPONSE: xp => `You have set the XP on thumbs up vote for **bug** feedback to be ${xp}.`,
					IDEA_XPDOWN_QUESTION: xp => `How much XP should be removed for a thumbs down vote for idea feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					BUG_XPDOWN_QUESTION: xp => `How much XP should be removed for a thumbs down vote for bug feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					IDEA_XPDOWN_RESPONSE: xp => `You have set the XP on thumbs down vote for **idea** feedback to be ${xp}.`,
					BUG_XPDOWN_RESPONSE: xp => `You have set the XP on thumbs down vote for **bug** feedback to be ${xp}.`,
					IDEA_XPSOLVED_QUESTION: xp => `How much XP should be given for a solved feedback for idea feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					BUG_XPSOLVED_QUESTION: xp => `How much XP should be given for a solved feedback for bug feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					IDEA_XPSOLVED_RESPONSE: xp => `You have set the XP on solved feedback for **idea** feedback to be ${xp}.`,
					BUG_XPSOLVED_RESPONSE: xp => `You have set the XP on solved feedback for **bug** feedback to be ${xp}.`,
					IDEA_XPDENIED_QUESTION: xp => `How much XP should be removed for a denied feedback for idea feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					BUG_XPDENIED_QUESTION: xp => `How much XP should be removed for a denied feedback for bug feedback? ${xp ? `The current xp is:\n\n${xp}.` : ''}`,
					IDEA_XPDENIED_RESPONSE: xp => `You have set the XP on denied feedback for **idea** feedback to be ${xp}.`,
					BUG_XPDENIED_RESPONSE: xp => `You have set the XP on denied feedback for **bug** feedback to be ${xp}.`,
					FEEDBACK_IDEA_STATUS: status => `The **IDEA** feedback status has been **${status ? 'Enabled' : 'Disabled'}**.`,
					FEEDBACK_BUG_STATUS: status => `The **BUG** feedback status has been **${status ? 'Enabled' : 'Disabled'}**.`,
					FEEDBACK_CURRENT_CHANNEL: (type, channel) => `Please set a new channel by #channel-name or a channel ID. Your current **${type}** feedback channel is ${channel}.`,
					FEEDBACK_RESPONSE: (type, newChannel) => `${newChannel} has been set as the **${type} feedback channel**.`,
					FEEDBACK_IDEA_COLOR_QUESTION: color =>
						`Please type the **HEX** color you would like to use for **IDEA** feedback.\n\nCurrent color can be seen on this embed. [ ${color} ]`,
					FEEDBACK_BUG_COLOR_QUESTION: color =>
						`Please type the **HEX** color you would like to use for **IDEA** feedback.\n\nCurrent color can be seen on this embed. [ ${color} ]`,
					FEEDBACK_COLOR_RESPONSE: color => `The color has been successfully changed to the color of this embed. [ ${color} ]`,
					FEEDBACK_IDEA_EMOJI: (isUp, emoji) =>
						`Please type the new emoji you would like to use for the **IDEA** feedback ${isUp ? '👍' : '👎'} emoji. Current emoji is [ ${emoji} ].`,
					FEEDBACK_BUG_EMOJI: (isUp, emoji) =>
						`Please type the new emoji you would like to use for the **BUG** feedback ${isUp ? '👍' : '👎'} emoji. Current emoji is [ ${emoji} ].`,
					FEEDBACK_INVALID_EMOJI: 'The emoji you entered is invalid. If you want to use a custom emoji, make sure it is added to the bot with the emoji feature.',
					FEEDBACK_INVALID_EMOJI_STRING: 'You did not enter a valid Emoji. Please try again.',
					FEEDBACK_EMOJI_SUCCESS: (type, isUp, emoji) => `The **${type === 'idea' ? 'IDEA' : 'BUG'}** emoji for ${isUp ? '👍' : '👎'} has been successfully updated to ${emoji}.`,
					ANALYTICS: status => `The analytics tracking feature has been **${status ? 'enabled' : 'disabled'}** for this server.`,
					TAGS_STORIES_MENU: (tags, stories, permissionLevel) => [
						`Allow tag creation / removal [ ${permissionLevel.find(level => level.id === tags.allowCreation).value} ]`,
						`Allow tag usage [ ${permissionLevel.find(level => level.id === tags.allowUsage).value} ]`,
						`Delete tag trigger [ ${tags.tagDeletion ? 'On' : 'Off'} ]`,
						`Tags Disabled Channels [ ${tags.disabledChannels.length} ]`,
						`Allow story creation / removal [ ${permissionLevel.find(level => level.id === stories.allowCreation).value} ]`,
						`Allow story usage [ ${permissionLevel.find(level => level.id === stories.allowUsage).value} ]`,
						`Delete story trigger [ ${stories.storyDeletion ? 'On' : 'Off'} ]`,
						`Stories Disabled Channels [ ${stories.disabledChannels.length} ]`
					],
					TAGS_CREATION_QUESTION: permission => `What would like to set the necessary permission required to create tags? The current permission required is ${permission}.`,
					STORIES_CREATION_QUESTION: permission => `What would like to set the necessary permission required to create stories? The current permission required is ${permission}.`,
					TAGS_CREATION_RESPONSE: permission => `You have set the necessary permission required to create tags as: ${permission}.`,
					STORIES_CREATION_RESPONSE: permission => `You have set the necessary permission required to create stories as: ${permission}.`,
					TAGS_USAGE_QUESTION: permission => `What would like to set the necessary permission required to use tags? The current permission required is ${permission}.`,
					STORIES_USAGE_QUESTION: permission => `What would like to set the necessary permission required to use stories? The current permission required is ${permission}.`,
					TAGS_USAGE_RESPONSE: permission => `You have set the necessary permission required to use tags as: ${permission}.`,
					TAGS_DISABLED_CHANNELS_QUESTION: currentList =>
						`Please provide the #channels or channel ids that you wish to disable tags in.${
							currentList.length ? `\n\nYour current disabled channels for tags are ${currentList.join(', ')}` : ''
						}`,
					TAGS_DISABLED_CHANNELS_RESPONSE: (added, removed) =>
						`${added.length ? `The following channels have been **added** as disabled channels for tags.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following channels have been removed as disabled channels for tags.\n\n${removed.join('\n')}` : ''
						}`,
					STORIES_DISABLED_CHANNELS_QUESTION: currentList =>
						`Please provide the #channels or channel ids that you wish to disable stories in.${
							currentList.length ? `\n\nYour current disabled channels for stories are ${currentList.join(', ')}` : ''
						}`,
					STORIES_DISABLED_CHANNELS_RESPONSE: (added, removed) =>
						`${added.length ? `The following channels have been **added** as disabled channels for stories.\n\n${added.join('\n')}\n\n` : ''}${
							removed.length ? `The following channels have been removed as disabled channels for stories.\n\n${removed.join('\n')}` : ''
						}`,
					STORIES_USAGE_RESPONSE: permission => `You have set the necessary permission required to use stories as: ${permission}.`,
					EVENT_TYPE_RESPONSE: chosenType => `The default event type has been set as: ${chosenType}`,
					EVENT_TIME_QUESTION: (type, time) =>
						`Type a combination of a number and ONE character to set as your default ${type}.\n\nYour currently set default is: \`${time}\`.\n\n**__Examples for input__**\n\n• 1 d »» duration is 1 day / 24 hours\n• 90 m »» duration is 90 min / 1 hour and 30 minutes\n• 1 w »» duration is 1 week / 7 days\n\n## IMPORTANT: your input cannot be more than <number><whitespace><character>`,
					EVENT_TIME_RESPONSE: (type, response) => `The default ${type} has been set as: **${response}**`,
					EVENT_ATTENDEE_QUESTION: maxAttendees =>
						`Please set a new default value for maximum attendees for the events.\n\nYour current maximum number of attendees is: \`${maxAttendees} attendees\`.`,
					EVENT_ATTENDEE_RESPONSE: newAmount => `The default maximum attendees for your events has been set to ${newAmount}.`,
					EVENT_PLATFORM_QUESTION: 'Type a number to select a default gaming platform for the events.',
					EVENT_PLATFORM_RESPONSE: platform => `The default platform for your events has been set to ${platform}.`,
					EVENT_GAME_QUESTION: game => `Please enter a new default game for the events.\n\nYour current default game is: \`${game || 'no game specified'}\`.`,
					EVENT_GAME_RESPONSE: chosenGame => `The default game for your events has been set to \`${chosenGame}\`.`,
					EVENT_CURRENT_CHANNEL: channel => `Please set a new channel with #channel-name or a channel ID. Your current default advertisement channel is ${channel}.`,
					EVENT_CHANNEL_RESPONSE: newChannel => `${newChannel} has been set as the new default event advertisement channel.`
				},
				SETLOGO: {
					HELP_DESCRIPTION: 'Set or view the current server logo.',
					EXTENDED_HELP: prefix => ['**If you want to change the server logo:**', `\`${prefix}setserverlogo url\``].join('\n'),
					MISSING_IMAGE: 'You need to attach an image or provide a url to use this command.',
					SUCCESSFULLY_CHANGED: 'The logo was successfully changed! This is what it looks like:'
				},
				XP: {
					HELP_DESCRIPTION: 'Shows or alters a members XP and level.',
					LEVEL_INFO: member => {
						const { levels } = member.guild.settings.xp;
						const { level: currentMemberLevel } = member.settings;
						const nextLevel = levels.get(currentMemberLevel + 1);
						return [
							`Current Level: **${currentMemberLevel === 0 ? "The member hasn't leveled up yet!" : `${levels.get(currentMemberLevel).name}`}**`,
							`XP: **${member.points.count.toLocaleString()}**`,
							'',
							nextLevel ? `XP to level up to next level: **${(nextLevel.xpNeeded - member.points.count).toLocaleString()}**` : 'Member has reached the **max level** in this guild!'
						].join('\n');
					},
					LEVEL_INFO_TITLE: member => `XP Information for ${member.user.tag}`,
					ADDED_POINTS: (member, points) =>
						`Successfully added **${points.toLocaleString()}** XP to ${member}.\nThey now have **${member.points.count.toLocaleString()}** total XP.`,
					POINTS_RESET: member => `${member} has lost **all levels** and **all XP**!`,
					REMOVED_POINTS: (member, points) =>
						`Successfully removed **${points.toLocaleString()}** XP from ${member}.\nThey now have **${member.points.count.toLocaleString()}** total XP.`
				}
			},
			COMMANDS_BASIC: {
				VIP: {
					HELP_DESCRIPTION: 'All kinds of VIP interaction.',
					EXTENDED_HELP: [
						`  • \`vip register\` *Register your server as a premium server.*`,
						`  • \`vip info\` *Shows your current vip ticket status.*`,
						`  • \`vip donate @user\` *Donate xx ticket(s) to another user.*`,
						`  • \`vip servers\` *Get a list of your registered premium servers.*`,
						`  • \`vip check (@user)\` *Check if you are already or another user is a vip.*`
					].join('\n'),
					NO_VIP: user =>
						`Sorry, but ${user ? `${user} is` : 'you are'} not a G4M3R VIP yet <:g4m3rSleepyFace:465432228525113354>. If ${
							user ? `${user} wants` : 'you want'
						} to become VIP and register ${user ? `their` : 'your'} server for VIP features ${
							user ? `tell them to` : 'please'
						} pledge at [Patreon](https://www.patreon.com/g4m3r "Click here to pledge and become G4M3R Patron") and join our [Support Server](http://support.g4m3r.xyz "Click here to join the G4M3R Support Server") <:g4m3rstareyes:459463621823430667>`,
					IS_VIP: user =>
						`**GREAT!** ${user ? `${user} is` : 'You are'} already a **G4M3R VIP**. <:g4m3reyesonfire:459458919677427722>\n\n**Due to ${
							user ? `this great` : 'your'
						}**  support we can build even better features. <:g4m3rhug:458994471712063499>`,
					NO_SERVER_REGISTERED: 'You have no server registered as vip server.',
					SERVER_ALREADY_REGISTERED: serverName => `your server **${serverName}** is already registered as VIP server.`,
					NO_TICKETS_LEFT: `Sorry, but you have not any premium tickets left to register a new vip server. If you want to have more vip servers please edit your pledge at [Patreon](https://www.patreon.com/g4m3r "Click here to pledge and become G4M3R Patron").`,
					QUESTION_SPEND_TICKET: amountTickets =>
						[
							`**Do you really want to spend ${amountTickets > 1 ? `\`ONE of your ${amountTickets} tickets\`` : '`your last ticket`'} to register this server as vip server?**`,
							'',
							'*PS: once a ticket is used to register a premium server it cant be refunded and the server cant be unregistered.*'
						].join('\n'),
					REGISTER_SERVER_SUCCESS: (serverName, remainingTickets) =>
						[
							`You successfully registered the server **${serverName}** as vip server by using a G4M3R premium ticket.`,
							'',
							`Now you have **${
								remainingTickets > 1 ? `${remainingTickets} tickets` : !remainingTickets ? 'no ticket' : 'one ticket'
							}** left in your account.${!remainingTickets} If you need more tickets please edit your pledge at [Patreon](https://www.patreon.com/g4m3r "Click here to edit your pledge and to get more G4M3R premium tickets") <:g4m3rhug:458994471712063499>`
						].join('\n'),
					DONATE: {
						NO_TICKETS: `Sorry, but you have no premium tickets left to make donations to other users.`,
						QUESTION_FOR_TICKET_NUMBER_TITLE: 'Please choose an amount of tickets you want to donate?',
						QUESTION_FOR_TICKET_NUMBER_DESC: (openTickets, target) =>
							[
								`**Currently available tickets:** ${openTickets}`,
								`**Selected user to donate to**: ${target}`,
								'',
								'Please understand that after taking this action the tickets cannot transfered back!'
							].join('\n'),
						SUCCESSFULLY_DONATED: (target, amount) => `You **successfully** donated **${amount}** premium tickets to ${target}!`
					},
					INFO: {
						DESC: user => `This is ${user ? `${user}'s` : 'your'} **VIP OVERVIEW**`,
						FIELD_TICKET_NAME: 'TICKET STATUS',
						FIELD_TICKET_VALUE: vip =>
							[
								`• OPEN: [\`${vip.openTickets}\`]`,
								`• DONATED: [\`${vip.donatedTickets}\`]`,
								`• RECEIVED: [\`${vip.receivedTickets}\`]`,
								`• SPEND: [\`${vip.totalTickets - vip.openTickets - vip.donatedTickets}\`]`,
								`• TOTAL: [\`${vip.totalTickets}\`]`
							].join('\n'),
						FIELD_VIP_NAME: 'VIP STATUS',
						FILED_VIP_VALUE: (vip, vipSince) =>
							[
								`• LEVEL: [\`${vip.vipLevel} ${vip.vipLevel === 'donation' ? '' : `(${vip.vipAmount} monthly ticket${vip.vipAmount > 1 ? 's' : ''})`}\`]`,
								`• SINCE: [\`${vipSince}\`]`
							].join('\n')
					}
				},
				INFO: {
					HELP_DESCRIPTION: 'Gives information about the bot.',
					EMBED: {
						DESCRIPTION: (member, version) =>
							`Hey ${member},\n\nI'm **G4M3R**, the best \`gaming companion\` for you and your community. ${this.client.functions.constants.EMOJIS.GAMER} v${version}`,
						FIELD1_NAME: 'Need Help?',
						FIELD1_VALUE: prefix => `Type \`${prefix}help\` or check out our wiki: <https://g4m3r.info>.`,
						FIELD2_NAME: 'Important Links',
						FIELD2_VALUE: () =>
							`**»** [${
								this.client.functions.constants.EMOJIS.PATREON
							} Patreon](https://www.patreon.com/g4m3r) [🌐 Website](https://www.g4m3r.xyz) [<:twitter:448436632681578496> Twitter](https://twitter.com/TheG4m3rBot)`,
						FIELD3_NAME: 'General Bot Stats',
						FIELD3_VALUE: ({ shardID, shardCount, uptime, allMemory, allServers, amountUsers }) =>
							[
								`🆔 ${shardID} / ${shardCount} ${this.client.functions.constants.EMOJIS.USB} ${allMemory} MB 🕐 ${uptime}`,
								`${this.client.functions.constants.EMOJIS.DISCORD} ${allServers} | 👥 ${amountUsers}`
							].join('\n')
					},
					RESPONSE_FOOTER: (ping, heartbeat) => `Ping [${ping} ms] & Avg. heartbeat [${heartbeat} ms]`
				},
				HELP: {
					HELP_DESCRIPTION: 'Display general help, all commands and help for a specific command.',
					HELP_EXTENDED: [
						'• `help` - get general help.',
						'• `help all` - menu with all categories and their commands (paginated).',
						'• `help details` - list all commands with description.',
						'• `help <commandName>` ,- list detailed help for a specific command.',
						'• `help <categoryName>` - list a specific category and it commands.'
					].join('\n'),
					SUPPORT: prefix =>
						`If you need help please review our [Wiki](https://g4m3r.info) as we have nice explanations with pictures and guides.\n\nTo view a list of our commands, please type \`${prefix}help all\`\n\nIf you still need further help, please contact us on our [Support Server](http://support.g4m3r.xyz)`,
					EMBED_SINGLE_COMMAND_AUTHOR: commandName => `How to use the [${commandName}] command:`,
					EMBED_SINGLE_COMMAND_FIELD1_NAME: '» Usage',
					EMBED_SINGLE_COMMAND_FIELD2_NAME: '» Extended Help',
					EMBED_ALL_COMMANDS_AUTHOR: 'All commands for G4M3R',
					EMBED_ALL_COMMANDS_FOOTER: prefix => `Type "<prefix>help commandName" (e.g. "${prefix}help ping").`,
					EMBED_ALL_COMMANDS_PAGINATION: (page, totalPages) => `page [ ${page} / ${totalPages}] || Use the reactions for actions.`,
					CORRECT_USAGE_OF_COMMAND: prefix => `This is not how you use that command. Please type \`${prefix}help help\` to check how it's used properly!`
				},
				INVITE: {
					HELP_DESCRIPTION: 'Displays the website link and there you can invite the bot to your server.',
					EMBED_DESCRIPTION: 'Visit our website at **<https://www.g4m3r.xyz>** \nto add the bot to your server! 😃'
				},
				SERVER: {
					HELP_DESCRIPTION: 'Shows valuable information about your server.',
					EMBED_TITLE: guildName => `Server Stats For « ${guildName} » .`,
					EMBED_FIELD1_NAME: 'Server Specific',
					EMBED_FIELD1_VALUE: ({ createdAt, owner, channels, roles, members, bots }) =>
						[`Created [**${createdAt}**]`, `👑 [**${owner}**]`, `Channels [**${channels}**]`, `Roles [**${roles}**]`, `👥 [**${members}**]`, `🤖 [**${bots}**]`].join('\n'),
					EMBED_FIELD2_NAME: 'G4M3R Specific',
					EMBED_FIELD2_VALUE: ({ messages, admins, events, commands }) =>
						[`💬 [**${messages}**]`, `Admins: [**${admins}**]`, `📆 [**${events}**]`, `Commands: [**${commands}**]`].join('\n'),
					EMBED_FIELD3_NAME: days => `Special (Last ${days} Days)`,
					EMBED_FIELD3_VALUE: ({ newMembers, activeMembers, amountEventsLastDays, amountCommandsLastDays }) =>
						[`New 👥 [**${newMembers}**]`, `Active 👥 [**${activeMembers}**]`, `📆 [**${amountEventsLastDays}**]`, `Commands [**${amountCommandsLastDays}**]`].join('\n'),
					EMBED_FIELD4_NAME: topLimit => `Top ${topLimit} Members`
				},
				USERSETTINGS: {
					HELP_DESCRIPTION: 'All user settings via in-chat menu.',
					HELP_EXTENDED: [
						'  • `settings` (opens interactive menu with all guild settings).',
						'  • `settings [menu]` (opens menu directly).',
						'  • `settings [menu] [input]` (directly sets that input if possible).',
						'',
						'» Interactive Tutorial:',
						'  • Type numbers to select.',
						'  • Type letters / words for the options (e.g. `q` for quitting the menu).',
						'',
						'» Do not write the brackets [].',
						'» Alias for the command is `me` and it works in-chat only.'
					].join('\n'),
					MENU_TIME_QUESTION: time => ['Please enter your new menu time by entering a number between 10 and 120.', `Your currently selected menu time: ${time} seconds`].join('\n'),
					MENU_TIME_RESPONSE: newTime => `Your menu time has been updated to ${newTime} seconds.`,
					MAIN_MENU_LIST_DATA: settings => [`Timezone [${settings.timezone || 'No timezone set'}]`, `MenuTime [${settings.menuTime} seconds]`, `Events`, `Notifications`],
					EVENTS: {
						EVENT_MENU_LIST_DATA: (events, eventType, duration, platformName) => [
							`Use default settings [${events.useDefault ? 'On' : 'Off'}]`,
							`Default type [${eventType}]`,
							`Default duration [${duration}]`,
							`Default max. attendees [${events.maxAttendees}]`,
							`Default privacy option [${events.privacy ? 'On' : 'Off'}]`,
							`Default platform [${platformName}]`,
							`Default game [${events.game}]`,
							`Default activity [${events.activity}]`,
							`Join on creation? [${events.joinOnCreation ? 'On' : 'Off'}]`
						],
						TOGGLE: (type, option) => `Your default event **${type}** has been **${option ? 'ENABLED' : 'DISABLED'}**.`,
						CHANGED_RESPONSE: (type, response) => `Your default **event ${type}** has been set as **${response}**.`,
						DURATION_QUESTION: time =>
							`Type a combination of a number and ONE character to set your default event duration.\n\nYour currently set default event duration is: ${time}.\n\n**__Examples for input__**\n\n• 1 d »» duration is 1 day / 24 hours\n• 90 m »» duration is 90 min / 1 hour and 30 minutes\n• 1 w »» duration is 1 week / 7 days\n\n## IMPORTANT: your input cannot be more than <number><whitespace><character>`,
						ATTENDEE_QUESTION: maxAttendees =>
							`Please set a new default value for maximum attendees for the events.\n\nYour current max number of attendees is: ${maxAttendees} attendees.`,
						PLATFORM_QUESTION: 'Type a number to select a default gaming platform for the events.',
						GAME_QUESTION: game => `Please enter a new default game for the events.\n\nYour current default game is: ${game}.`,
						ACTIVITY_QUESTION: activity => `Please enter a new default activity for the events.\n\nYour current default activity is: ${activity}.`,
						INVALID_DURATION: 'You did not enter a valid duration.'
					},
					NOTIFICATION: {
						LIST_DATA: notification => [
							`Direct Message for **global xp** level up [**${notification.globalLevelUpDm ? 'On' : 'Off'}**]`,
							`Direct Message for **server xp** level up [**${notification.serverLevelUpDm ? 'On' : 'Off'}**]`
						],
						SUCCESSFUL_UPDATE_LEVELUPDM: (activated, isGlobal) =>
							`Direct message notifications for **${isGlobal ? 'global' : 'server'} xp level-ups** are now **${activated ? 'ENABLED' : 'DISABLED'}** for you.`
					},
					TIMEZONE_REQUEST: (client, authorID, defaultTimezone) =>
						this.client.functions.discord.createEmbed({
							client: client,
							userID: authorID,
							title: 'Please enter your exact timezone or a search term.',
							desc: [
								'',
								'Your currently selected **default timezone is:**',
								'',
								'```',
								defaultTimezone,
								'```',
								'',
								'**There are 2 options to enter the timezone:**',
								'  • Type a search term like "berlin" and select from a list.',
								'  • Type the exact timezone like "Europe/Berlin".',
								'',
								'Here is a link to all timezones available: ',
								'https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'
							].join('\n'),
							color: this.client.functions.constants.colors.INFO_BLUE
						}),
					TIMEZONE_SELECTION_TITLE: 'Please select one of the following timezones by typing the number.',
					TIMEZONE_RESPONSE: newTimezone => `The timezone has been set to **${newTimezone}**.`,
					NO_TIMEZONE_FOUND: term => `Could not find any timezone for your term \`${term}\`.`
				},
				VERIFY: {
					HELP_DESCRIPTION: 'Starts the verification process set on this server.',
					EXTENDED_HELP: prefix =>
						[
							'Begin or end the verification process.',
							'',
							`\`${prefix}verify\` Begins the welcome process for the user.`,
							`\`${prefix}verify end\` Ends the welcome process for the user.`
						].join('\n'),
					DISABLED: 'This server has not activated the verification system. Please contact a moderator to have them set it up.',
					FIRST_MISSING: 'This server has not set up a proper first welcome message. Please contact a moderator/admin of the server and have them enable it.',
					ALREADY_STARTED: 'Sorry, you already have an open channel for your welcome system. Please use that channel to finish your process.',
					USE_THIS: 'Please use this setup channel that was already made for you.',
					NOT_VERIFY_CHANNEL: 'Sorry the channel was is not a welcome channel. Please contact a moderator/admin of the server.',
					NO_AUTOROLE: 'There is no auto assign role setup for the server, please contact a moderator/admin.'
				}
			},
			COMMANDS_COMMUNITY: {
				PROFILE: {
					HELP_DESCRIPTION: 'View the profile card of yourself or a user with a certain background.',
					HELP_EXTENDED: [
						'» The profile card shows all your:',
						'',
						'  • Global & server XP level.',
						'  • XP status of your current global & server XP level.',
						'  • Badges you earned.',
						'  • Custom background selected by you.',
						'',
						'» Use the `leaderboard` command to check the leaderboard info.',
						'» Use the `background` command to select your custom background.',
						'» Alias for the command is `prof`.'
					].join('\n')
				},
				LEADERBOARD: {
					HELP_DESCRIPTION: 'View the global or server leaderboard including your placing.',
					HELP_EXTENDED: [
						'» The leaderboard card shows:',
						'',
						'  • Top 3 positioned users.',
						'  • Your ranking and current XP.',
						'',
						'» Use the `profile` command to check your detailed information.',
						'» Use the `background` command to select your custom background.',
						'» Alias for the command is `lb`.'
					].join('\n'),
					NO_POINTS: (member, author) =>
						`${member.id === author.id ? `You have` : `${member.displayName} has`} to acquire some XP through activity before being showed on the leaderboard.`
				},
				BACKGROUND: {
					HELP_DESCRIPTION: 'Select your custom background for your profile pic.',
					HELP_EXTENDED: [
						'  • `Background` (opens interactive menu with all available backgrounds).',
						'  • `Background [category name]` (opens menu with backgrounds of that category).',
						'  • `Background [background number]` (directly select that background).',
						'',
						'» Interactive Tutorial:',
						'  • Type numbers to select.',
						'  • Type letters / words for the options (e.g. `q` for quitting the menu).',
						'',
						'» Valid category names are `anime`, `animals`, `art`, `games` and `space`.',
						'» Do not write the brackets [].',
						'» Alias for the command is `bg` and it works in-chat and via DM.'
					].join('\n'),
					EMBED_TITLE: (author, input) => `Unfortunately [ ${input} ] is not a valid category.`,
					EMBED_DESCRIPTION: allowedCategories => `Valid categories are: \`${allowedCategories.join('`, `')}\``,
					CLASS_PAGINATION_TITLE: 'Type the number for your custom background selection.',
					CLASS_PAGINATION_FOOTER: `Please select a background by number or cancel with [q]uit.`,
					CLASS_PREVIEW_TITLE: background => `Selected background [${background.id}] (${background.name})`,
					CLASS_PREVIEW_DESCRIPTION: 'Do you really want to select that background? Please use one of the reactions to take action:',
					CLASS_PREVIEW_FIELD_BASIC: () =>
						[
							`${this.client.functions.constants.EMOJIS.YES_NO.YES_EMOJI} Yes`,
							`${this.client.functions.constants.EMOJIS.YES_NO.NO_EMOJI} No`,
							`${this.client.functions.constants.EMOJIS.QUIT} Cancel`
						].join('\n'),
					CLASS_PREVIEW_FIELD_VIP: () =>
						[`${this.client.functions.constants.EMOJIS.SUNGLASSES} **Black** mode`, `${this.client.functions.constants.EMOJIS.FLASHLIGHT} **White** mode`].join('\n'),
					CLASS_SAVE_FAIL: bgID => `There is no background with the ID\`${bgID}\`!**`,
					CLASS_SAVE_SUCCESS: (background, style) => `Selected \`${background.name}\` [${background.id}, ${style} style] as new background for you. :ok_hand:.`,
					CLASS_CLOSE_MENU: `Closed the **background menu** for you :ok_hand:.`,
					STYLE_VIP_ONLY:
						'Sorry, but the black theme is only for VIP subscribers. If you want to become VIP please pledge to our [Patreon](https://www.patreon.com/g4m3r "Click here to pledge and become G4M3R Patron").'
				},
				EVENTS: {
					HELP_DESCRIPTION: 'View, create, join and manage events.',
					EXTENDED_HELP: [
						'__**BASICS**__',
						'',
						'• `events` to list all existing and active events.',
						'• `events create [event type]` to create an event of a certain type.',
						'• `events show <event ID>`',
						'• `events join <event ID>`',
						'• `events leave <event ID>`',
						'• `events search` *opens the search menu*.',
						'',
						'__**only if you are event author or server admin**__',
						'',
						'• `events ad <event ID>` *advertise your event (including auto updates on changes)*.',
						'• `events edit <event ID>`',
						'• `events delete <event ID>`',
						'• `events add ` *add server member(s) to an event*.',
						'',
						'__**only if event is private**__',
						'',
						'• `events pin <event ID>` DMs you the existing 4 digit PIN if event is private.',
						'• `events join <PIN>`.',
						'',
						'__**EXPERT**__',
						'• search directly via parameters.',
						'• **example**: `events search author: @pedall#00ß1 type: gaming tags: tag1 tag2`.'
					].join('\n'),
					INVALID_ACTION: (prefix, action) =>
						`\`${action}\` is not a valid action. Please check the commands extended help for more information by typing \`${prefix}help events\`.`,
					EVENT_ADVERTISE_CHANNEL_TITLE: 'Which channel do you want to post the advertisement in?',
					EVENT_ADVERTISE_CHANNEL_OPTIONS: adChannel => [`Use default advertisement channel: ${adChannel || '`None`'}`, 'Use current channel'],
					TRANSFER_WAITING_LIST: serverName => `You are now an attendee of this event and removed from the waiting list on the server \`${serverName}\`.`,
					BASIC: {
						START: 'Start',
						DURATION: 'Duration',
						END: 'End',
						ATTENDING: 'Attending',
						WAITING: 'Waiting List',
						DENIED: 'Denied',
						TITLE: 'Title',
						TIME: 'Time',
						JOINED: 'Joined',
						FOOTER: (prefix, id) => `Type ${prefix}e show ${id} on the server for more details.`
					},
					EVENT_CREATION: {
						DEFAULTS: {
							TITLE: 'No Title',
							DESCRIPTION: 'No description',
							GAME: 'No game',
							ACTIVITY: 'No activity',
							PLATFORM: 'STEAM'
						},
						SUCCESS: (event, time, prefix, newEvent) =>
							[
								`successfully ${newEvent ? 'created' : 'edited'} your  __new event__ with the ID **[${event.no}]**.`,
								'',
								`**TITLE** \`${event.title}\``,
								`**STARTING TIME** \`${time}\``,
								'',
								`**#** type \`${prefix}events show ${event.no}\` to get more details.`,
								`**#** type \`${prefix}events join ${event.no}\` to join the event.`
							].join('\n')
					},
					EVENT_AUTHOR_TEXT: (eventNumber, authorName) => `Event [${eventNumber}] created by ${authorName}`,
					EVENT_JOIN: {
						ALREADY_JOINED_RESPONSE: username => `${username}, you already joined this event!`,
						ALREADY_WAITING_RESPONSE: username => `${username}, you are already **on the waiting list** for this event!`,
						SUCCESSFULLY_JOINED_RESPONSE: username => `${username}, you successfully joined this event!`,
						SUCCESSFULLY_JOINED_WAITING_LIST_RESPONSE: (username, spot) => `${username}, you successfully joined the waiting list on spot \`#${spot}\`.`,
						DECLINED_WAITING_LIST_RESPONSE: username => `${username}, you declined to join the waiting list.`,
						WAITING_LIST_QUESTION: place =>
							[
								'Unfortunately the events **members limit is already reached**.',
								'',
								'Do you want to take place on the **waiting list**?',
								'',
								`Your place on the waiting list would be \`#${place}\`.`,
								'',
								'# Please answer with `yes`, `y`, `no` or `n`'
							].join('\n'),
						ASK_FOR_PIN: ['This event needs a **4-digit PIN** to be joined.', '', 'Please enter the correct PIN to join the event.'].join('\n'),
						WRONG_PIN: 'This was the wrong pin. Please try again to react on the event advertisement if you think you mistyped.',
						FIELDS: {
							VALUE: {
								TIME: (start, duration, end) => `Start: ${start}\nDuration: ${duration}\nEnd: ${end}`
							}
						}
					},
					EVENT_LEAVE: {
						SUCCESSFULLY_LEFT_RESPONSE: username => `${username}, you just successfully left the event.`,
						SUCCESSFULLY_LEFT_WAITING_LIST_RESPONSE: username => `${username}, you just successfully were removed from the event's waiting list.`,
						NOT_ATTENDEE_OR_WAITING: username => `${username}, you are neither an attendee of the event nor on the waiting list.`
					},
					EVENT_DENY: username => `${username}, RSVP: Not attending the event.`,
					LIST_EVENTS: {
						TITLE: 'Please type a number to select an event.',
						NO_EVENTS: 'There are no events to be shown.'
					},
					EVENT_GROUPS: {
						BASIC: '',
						BASIC_PRIVATE: '🔐',
						BASIC_RECURRING: frequencyString => `🔁 (${frequencyString})`,
						BASIC_PRIVATE_RECURRING: frequencyString => `🔐  🔁 (${frequencyString})`,
						GAMING: '**🎮 GAMING**',
						ADDITIONAL: '**<:psnplus:435173285336973322> ADDITIONAL**'
					},
					EDIT_EVENT: {
						NO_EVENT: eventID => `There is no event to be edited with the given event ID [${eventID}].`,
						EMBED_AUTHOR: eventID => `EVENT [${eventID}] » Type a number to edit the respective info.`,
						EMBED_FOOTER: 'Other Options: [Q]uit',
						EMBED_FOOTER_BACK: 'Other Options: [B]ack, [Q]uit',
						FIELDS: {
							NAMES: { BASIC: '📊 BASIC', TIME: '⏰ TIME', DESC: '📝 DESC', RSVP: '👥 RSVP ', MISC: '⚙ MISC', GAMING: '🎮 GAMING' },
							VALUES: {
								BASIC: (title, type, tagContent) => `**[1] Title:** \`${title}\`\n**[2] Type:** \`${type}\`\n**[3] Tags:** \`${tagContent || 'None'}\``,
								TIME: (start, duration, end) => `**[4] Starts:** \`${start}\`\n**[5] Duration:** \`${duration}\`\n**Ends:** \`${end}\``,
								DESC: desc => `**[6] Description:** ${desc || 'No description provided.'}`,
								RSVP: maxAttendees => `**[7] Max Attendees:** \`${maxAttendees}\``,
								GAMING: (platform, game, activity) => `**[14] Platform:** \`${platform}\`\n**[15] Game:** \`${game}\`\n**[16] Activity:** \`${activity}\``,
								MISC: (isPrivate, reminders, timezone, recurring, frequency, removeRecurringAttendees) =>
									`**[8] Private:** ${isPrivate ? `🔐 \`${isPrivate}\`` : `\`${isPrivate}\``}\n**[9] Reminders:** \`${reminders
										|| 'None'}\`\n**[10] Timezone:** \`${timezone}\`\n**[11] Recurring:** ${recurring ? `🔁 \`${recurring}\`` : `\`${recurring}\``}${
										recurring ? `\n**[12] Frequency:** \`${frequency}\`\n**[13] Remove Recurring Attendees:** \`${removeRecurringAttendees}\`` : ''
									}`
							}
						}
					},
					EDIT_EVENT_DETAILS: {
						LIMITS: {
							CHARS: limit => `max. ${limit} chars`,
							ATTENDEES: limit => `max. ${limit} members`,
							TAGS: (tagLimit, tagStringLimit) => `max. ${tagLimit} tags, ${tagStringLimit} signs each tag`
						},
						AUTHOR: eventNumber => `EDITING EVENT [${eventNumber}]`,
						FOOTER: `## Options: [B]ack, [Q]uit`,
						TITLE: { CURRENT: title => `Current title: \`${title}\``, ACTION: `Please input a new title for the event.` },
						STARTS: {
							CURRENT: start => `Current starting date/time: \`${start}\``,
							ACTION: 'Please input a new date/time for the event.',
							EXPLANATION: [
								'# format: YYYY/MM/DD hh:mm',
								'# format: hh:mm (will assume today as date)',
								'# format: monday 10am (will assume next monday at 10am)',
								'# format: tomorrow 8:30pm'
							].join('\n')
						},
						DURATION: {
							CURRENT: dur => `Current duration: \`${dur}\``,
							ACTION: `Please input the new duration for the event.`,
							EXPLANATION: [
								'**Necessary format:** <number as integer><whitespace><unit shortcode>.',
								'**Possible units:** w (week), d (day), h (hour), m (minute)',
								'',
								'**Examples:**',
								'`2 h` will count for 2 hours aka 120 minutes.',
								'`150 m` will count for 150 minutes aka 2 hours 30 minutes.',
								'`2 w` will count for 2 weeks.'
							].join('\n')
						},
						DESCRIPTION: {
							CURRENT: description => `Current Description: \n\`\`\`md\n${description}\n\`\`\`\n`,
							ACTION: 'Please input a new description for the event.'
						},
						MAX_ATTENDEES: {
							CURRENT: maxMembers => `Current maximum member count: \`${maxMembers}\``,
							ACTION: 'Please input a new maximum member count for the event.'
						},
						TAGS: { CURRENT: tags => `Current set tags: \`${tags}\``, ACTION: 'Please input a new set of tags for the event (divide multiple tags by comma).' },
						PLATFORM: {
							CURRENT: (platforms, platformID) => `Current platform: \`${platforms.find(p => p.id === platformID).name}\``,
							ACTION: 'Please select a new platform for the event.',
							EXPLANATION: platforms => klasaUtil.codeBlock('ini', platforms.map(p => `[ ${p.id} ] ${p.name}`).join('\n'))
						},
						GAME: { CURRENT: game => `Current game: \`${game}\``, ACTION: 'Please input which game you wanna play in the event.' },
						ACTIVITY: { CURRENT: activity => `Current activity: \`${activity}\``, ACTION: 'Please input a new gaming activity for the event.' },
						REMINDERS: {
							CURRENT: reminders => `Current set reminders:\n${reminders}`,
							ACTION: 'Please manage your reminders according to the explanation. Reminders are always upfront the events start.',
							EXPLANATION: [
								'# **REMOVE**: type `remove <reminder number>` to remove the respective reminder.',
								'# **ADD**: type a new reminder in the respective format to add a new reminder.',
								'',
								'**Necessary format:** <number as integer><whitespace><unit shortcode>',
								'**Possible units:** w (week), d (day), h (hour), m (minute)',
								'',
								'**Examples:**',
								'`2 h` will count for 2 hours aka 120 minutes.',
								'`150 m` will count for 150 minutes aka 2 hours 30 minutes.',
								'`2 w` will count for 2 weeks.'
							].join('\n'),
							NO_REMINDERS: 'You have not created any reminders.'
						},
						FREQUENCY: {
							CURRENT: frequency => `Current frequency setting for repeated event: \`${frequency}\``,
							ACTION: 'Please input a new frequency for the recurrence of the event.',
							EXPLANATION: [
								'**Necessary format:** <number as integer><whitespace><unit shortcode>',
								'**Possible units:** w (week), d (day), h (hour), m (minute)',
								'',
								'**Examples:**',
								'`2 h` will count for 2 hours aka 120 minutes.',
								'`150 m` will count for 150 minutes aka 2 hours 30 minutes.',
								'`2 w` will count for 2 weeks.'
							].join('\n')
						},
						TIMEZONE: {
							CURRENT: timezone => `Current timezone setting for this event: \`${timezone}\``,
							ACTION: 'Please input a new timezone for this event.',
							EXPLANATION: [
								'',
								'**There are 2 options to enter the timezone:**',
								'  • type a search term like "berlin" and select from a list.',
								'  • type the exact timezone like "Europe/Berlin".',
								'',
								'Here is a link to all timezones available: ',
								'https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'
							].join('\n')
						}
					},
					SHOW_EVENT: {
						FOOTER: (prefix, eventNumber) => `Type \`${prefix}e join ${eventNumber}\` to join this event. Ask the author for the pin if its private.`,
						FOOTER_TEXT: (attendees, author, denials, waitingList, authed) =>
							`## Options: ${attendees.includes(author) ? `[L]eave, ` : `[J]oin, `}${denials.includes(author) ? '' : '[D]eny, '}${
								attendees.length > this.client.functions.constants.EVENTS.SHOW_EVENT_MEMBER_LIMIT ? `[A]ttendees, ` : ''
							}${denials.length ? `[Den]ials, ` : ''}${waitingList.length ? `[W]aiting, ` : ''}${authed ? `[E]dit, [Del]ete, [Ad]vertise ` : ''}[B]ack, [Q]uit`,
						FOOTER_UPDATED: time => `updated at ${time}`,
						NO_EVENT: eventID => `there is **no event** to be shown with the given event ID **[${eventID}]**.`,
						AUTHOR: (eventNumber, nickname) => `Event with ID [${eventNumber}] created by ${nickname}.`,
						NO_USERS: 'I am sorry buddy, but there are no users to display',
						ATTENDEES_AUTHOR: eventNumber => `Showing the [attendees] of your event no [${eventNumber}].`,
						DENIALS_AUTHOR: eventNumber => `Showing the [denials] of your event no [${eventNumber}].`,
						WAITING_AUTHOR: eventNumber => `Showing the [waitingList] of your event no [${eventNumber}].`,
						FIELDS: {
							NAMES: {
								BASIC: '📊 BASIC',
								TIME: '⏰ TIME',
								DESC: '<:info:443803045382324225> DESC',
								RSVP: '👥 RSVP ',
								MISC: '⚙ MISC',
								GAME: '🎮 GAMING',
								OPTION: 'OPTIONS',
								REMINDERS: '🔔 REMINDERS'
							},
							VALUES: {
								BASIC: (title, type, tagContent) => `**Title:** \`${title}\`\n**Type:** \`${type}\`\n${tagContent ? `**Tags:** \`${tagContent}\`` : ''}`,
								TIME: duration => `**Duration:** \`${duration}\``,
								RSVP: (attendees, maxAttendees, attendeesNames, waitingList, waitingNames, denials) =>
									`**Joined:** [${attendees.length}/${maxAttendees}]\n${attendees.length ? `**Attendees:** ${attendeesNames}\n\n` : ''}${
										waitingList.length ? `**Waiting:** ${waitingNames}\n` : ''
									}${denials.length ? `**Denials:** \`${denials.length}\`` : ''}`,
								GAMING: (platform, game, activity) => `**Platform:** \`${platform}\`\n**Game:** \`${game}\`\n**Activity:** \`${activity}\``
							}
						}
					},
					DELETE_EVENT: {
						SUCCESS: event => `Successfully deleted the event \`[${event.no}] ${event.title}\` for you.`
					},
					ADD_EVENT: {
						INITIAL_QUESTION: [
							'Please mention a server member (@name) or give me user id.',
							'',
							'Adding members to events only works of the event still has open spots left.'
						].join('\n'),
						ADDITIONAL_QUESTION: [
							'Do you want to add another member to the event?',
							'',
							'If yes, please mention a server member (@name) or give me user id.',
							'If **no**, please type [Q]uit or [C]ancel to quit the process.',
							'',
							'Adding members to events only works of the event still has open spots left.'
						].join('\n'),
						NO_MEMBERS_RECOGNIZED: 'you have to mention one ore more members of this server. No other input is allowed.',
						SUCCESSFULLY_ADDED: (members, attendees, waitingList) =>
							[
								`Successfully **added the members** \`${members.join('`, `')}\` to the event (either attendees or waiting list).`,
								'',
								'**ALREADY JOINED**',
								`\`${typeof attendees !== 'string' ? attendees.join('`, `') : attendees}\``,
								'',
								'**ALREADY WAITING**',
								`\`${typeof waitingList !== 'string' ? waitingList.join('`, `') : waitingList}\``
							].join('\n'),
						NO_ONE_ADDED: (attendees, waitingList) =>
							[
								`Did no action since all mentioned members already were joining the event or on the waiting list.`,
								'',
								'**ALREADY JOINED**',
								`\`${typeof attendees !== 'string' ? attendees.join('`, `') : attendees}\``,
								'',
								'**ALREADY WAITING**',
								`\`${typeof waitingList !== 'string' ? waitingList.join('`, `') : waitingList}\``
							].join('\n'),
						ALREADY_JOINED_RESPONSE: userID => `<@${userID}> has already **joined** this event!`,
						ALREADY_WAITING_RESPONSE: userID => `<@${userID}> is already **on the waiting list** for this event!`,
						NO_WAITING: 'No one already on the waiting list.'
					},
					SEARCH_EVENT: {
						POSSIBILITIES: (author, tags, type) => [
							`By event author [${author ? `<@${author.id}>` : '`no author`'}]`,
							`By tags [\`${tags.length ? tags.join('`, `') : 'no tags'}\`]`,
							`By type [\`${type || 'no type'}\`]`
						],
						AUTHOR: [
							'To search for events from a specific author please:',
							'',
							'• Highlight the member with @username.',
							'• Provide the members ID (only via discord developer mode).'
						].join('\n'),
						TAGS: ['To search for a specific events tags, please provide the respective tags.', '', '**EXAMPLE** `tagName1`  `tagName2`  `tagName3`'].join('\n'),
						TYPE: ['Gaming', 'Community']
					},
					GET_PIN: {
						ALLOWED: event =>
							[
								`**Here is your PIN for the event id [ ${event.no} ]**.`,
								'',
								`\`TITLE\`: **${event.title}**`,
								`\`PIN\`: \`${event.joinCode}\``,
								'',
								'Please note it down, so you can share it later!'
							].join('\n'),
						NOT_ALLOWED: (displayAuthorName, event) =>
							[
								`**»» ${displayAuthorName}, you are not allowed to get the PIN for the event [ ${event.no} ]**.`,
								'',
								`\`TITLE\`: **${event.title}**`,
								'',
								'Please contact the author of the event to get the PIN and then join it.'
							].join('\n'),
						NO_PIN_NECESSARY: (displayAuthorName, event) =>
							[
								`**»» ${displayAuthorName}, the event with the id [ ${event.no} ] is not set to private!**`,
								'',
								`\`TITLE\`: **${event.title}**`,
								'',
								'`You do not need a PIN to join that event.`'
							].join('\n')
					},
					KICK_EVENT: {
						NEED_USER: [
							'Please **provide a user** (@user or userID) that should be kicked from the event.',
							'',
							'The user should be attendee or on the waiting / denial list.'
						].join('\n'),
						NEED_REASON: targetName => `Please **provide a reason** why the user \`${targetName}\` should be kicked from the event.`,
						SUCCESSFULLY_KICKED: (targetName, event) => `You **successfully kicked** \`${targetName}\` from the event **[${event.no}] ${event.title}**.`
					},
					NOTIFICATIONS: {
						FOOTER: serverName => `on server: ${serverName}`,
						DELETE_ATTENDEE: {
							DESCRIPTION: event =>
								[
									`**IMPORTANT INFORMATION**`,
									'',
									`The event \`[${event.no}] ${event.title}\` has been deleted by the author or admins and you were registered to attend in this event.`
								].join('\n')
						},
						UPDATE_ATTENDEE: {
							DESCRIPTION: event =>
								[
									`**IMPORTANT INFORMATION**`,
									'',
									`The event \`[${event.no}] ${event.title}\` has been updated by the author and you are registered to attend in this event.`,
									'',
									'*Please check the events information if you still will be attending to the event*.'
								].join('\n')
						},
						INFO_ATTENDEE: {
							DESCRIPTION: (event, message) =>
								[
									`**IMPORTANT INFORMATION FROM THE EVENT AUTHOR**`,
									'',
									`${klasaUtil.codeBlock('ini', message)}`,
									'',
									'*You received this info since you are registered to attend in this event*.'
								].join('\n')
						},
						KICK_USER: {
							DESCRIPTION: (event, reason) =>
								[
									`**IMPORTANT INFORMATION FROM THE EVENT [${event.no}]**`,
									'',
									`\`TITLE\` **${event.title}**`,
									'',
									'You have been **kicked from the event** because of:',
									`${klasaUtil.codeBlock('ini', reason)}`
								].join('\n')
						},
						DELETE_WAITING: {
							DESCRIPTION: event =>
								[
									`**IMPORTANT INFORMATION**`,
									'',
									`The event \`[${event.no}] ${event.title}\` has been deleted by the author or admin and you were on the waiting list for this this event.`
								].join('\n')
						},
						UPDATE_WAITING: {
							DESCRIPTION: event =>
								[
									`**IMPORTANT INFORMATION**`,
									'',
									`The event \`[${event.no}] ${event.title}\` has been updated by the author and you are on the waiting list for this this event.`,
									'',
									'*Please check the events information if you still want to attend to the event*.'
								].join('\n')
						},
						INFO_WAITING: {
							DESCRIPTION: (event, message) =>
								[
									`**IMPORTANT INFORMATION FROM THE EVENT AUTHOR**.`,
									'',
									`${klasaUtil.codeBlock('ini', message)}`,
									'',
									'*You received this info since you are registered on the waiting list for this event*.'
								].join('\n')
						},
						UPDATE_DENIALS: {
							DESCRIPTION: event =>
								[
									`**IMPORTANT INFORMATION**`,
									'',
									`The event \`[${event.no}] ${event.title}\` has been updated by the author and you denied the participation in this event.`,
									'',
									'*Please check the events information if you maybe now want to attend to this event*.'
								].join('\n')
						},
						INFO_DENIALS: {
							DESCRIPTION: (event, message) =>
								[
									`**IMPORTANT INFORMATION FROM THE EVENT AUTHOR**`,
									'',
									`${klasaUtil.codeBlock('ini', message)}`,
									'',
									'*You received this info since you you denied the participation in this event*.'
								].join('\n')
						},
						UPDATE_MAX_ATTENDEE: {
							TITLE: 'Important Information',
							DESC: (no, title, serverName, newMax) =>
								[
									`**Event [${no}]** ${title}`,
									`**on Server** ${serverName}`,
									`The maximum amount of attendees limit on event [] has been decreased to **${newMax} attendees**.`,
									'',
									`Due to you joining the event after the first ${newMax} attendees you have been removed from the event.`
								].join('\n')
						},
						TRANSFER_FOOTER: (prefix, id) => `Type ${prefix}e show ${id} on the server for more details.`
					},
					ERRORS: {
						NO_ATTENDEES: '`No attendees`',
						NO_ONE_WAITING: '`No one waiting`',
						NOT_ALLOWED_ACTION: action => `You are **not allowed to ${action}** this event. Only the event author or server admins are.`,
						NO_EVENT_NUMBER: ['You did not provide any event number for that action.', '', '**Note:** *Please provide a valid event number*.'].join('\n'),
						NO_EVENT_EXISTING: eventID => `There is **no event** existing with the event ID **[${eventID}]** you provided.`,
						NO_PIN_PROVIDED: `This event is private and requires a 4 digit PIN to be joined. Please try again.`,
						WRONG_PIN_PROVIDED: `Your provided pin is incorrect.`
					},
					CLOSE_EVENTS_MENU: 'Closed the **events menu** for you.'
				},
				GIVEAWAY: {
					HELP_DESCRIPTION: 'Enter the giveaway and get a chance to be a winner.',
					HELP_EXTENDED: '',
					FAIL_IGN: ['ign', 'yourign', 'myign'],
					NO_IGN: 'You did not enter a valid In Game Name to enter the giveaway with\n\nPlease make sure to not exceeded the max. IGN length of 16 chars.',
					MESSAGE: (exists, ign) =>
						[
							`<:g4m3rstareyes:459463621823430667> Your IGN has been **${exists ? 'UPDATED' : 'ADDED'}** in the lottery as:`,
							'',
							`**${ign}**`,
							'',
							`<:g4m3rhug:458994471712063499> The winner of the giveaway will be announced in <#283852020472086528>.`
						].join('\n'),
					AOV_ADD: `You have successfully been **ADDED** into the lottery.`
				}
			},
			COMMANDS_FUN: {
				KITTEN: {
					HELP_DESCRIPTION: 'Random Kitten GIF or Image!',
					HELP_EXTENDED: prefix =>
						['Tribute to the former (and very awesome) AwesomeBot by Bitquote <3', 'Default will show a GIF', `\`${prefix}kitten img\` will show an image.`].join('\n'),
					EMBED_TITLE: (author, type) => `${author}, here is your random kitten ${type} 🐱.`
				},
				PUPPY: {
					HELP_DESCRIPTION: 'Random Puppy GIF or Image!',
					HELP_EXTENDED: prefix =>
						['Tribute to the former (and very awesome) AwesomeBot by Bitquote <3', 'Default will show a GIF', `\`${prefix}puppy img\` will show an image.`].join('\n'),
					EMBED_TITLE: (author, type) => `${author}, here is your random puppy ${type} 🐶.`
				},
				MEME: {
					HELP_DESCRIPTION: 'Create and store custom made memes. Meme like a boss!',
					HELP_EXTENDED: prefix =>
						[
							`**»** \`${prefix}meme add <searchText>\` *find a meme template to build your meme.*`,
							`**»** \`${prefix}meme <meme name>\` *post your meme like a boss.*`,
							`**»** \`${prefix}meme\` *list all your built memes and delete if you want.*`,
							`**»** \`${prefix}meme del/delete/rem/remove <memeID>\` *delete one specificy meme by ID.*`,
							``,
							`**##** Meme feature also works via Direct Message with the bot.`,
							`**##** <> stands for mandatory input.`
						].join('\n'),
					LIST_ALL_MEMES: '**By clicking this link you will get a full list of possible meme templates**.',
					NO_MEME: string => `Could not find any meme for your input \`${string}\`.`,
					MISSING_MEME_ID: 'You have to input a **MEME ID** to remove that respective meme.',
					NO_MEMES_SAVED: 'There are no memes saved in your global meme repository. You should create one :smirk:.',
					CLASS_SEARCH_FOUND_NOTHING: term => `Could not find any memes for your search term \`${term}\`.`,
					CLASS_NO_RESPONSE_API: 'Could not get any response from meme API.',
					CLASS_SELECT_MEME_QUESTION: 'Do you really want to select that meme to continue?',
					CLASS_ENTER_TEXT: {
						TITLE: name => `Selected meme [${name}].`,
						TOP_TEXT: [`## Please enter your text for the **TOP** meme text.`, '', '## Enter **one underscore** (`_`) to leave it empty.'].join('\n'),
						BOTTOM_TEXT: topText =>
							[
								`Selected **TOP** text: ${topText === '_' ? 'no top text' : topText}`,
								'',
								`## Please enter your text for the **BOTTOM** meme text.`,
								'',
								'## Enter **one underscore** (`_`) to leave it empty.'
							].join('\n'),
						NAME_TEXT: meme =>
							[
								`Selected **TOP** text: ${meme.topText === '_' ? 'no top text' : meme.topText}`,
								`Selected **BOTTOM** text: ${meme.bottomText === '_' ? 'no bottom text' : meme.bottomText}`,
								'',
								`## Please enter your **custom name** for the new meme.`,
								'',
								`## Later you can use this name to call the meme.`
							].join('\n')
					},
					CLASS_SPECIAL_FOOTER: `Type [Q]uit to exit the process, [B]ack to go one step back.`,
					APPROVAL: {
						LOOK_LIKE: name => `**This is how your meme \`[ ${name} ]\` will look like**`,
						OPTIONS: url =>
							[
								`${url}`,
								'',
								`__**Options:**__`,
								``,
								`  • **[L]ink** to post the URL and cancel menu.`,
								`  • **[P]ost** to post the URL **AND** save the the meme.`,
								`  • **[S]ave** the meme to your individual meme database.`,
								`  • **[B]ack** to go one step back.`,
								`  • **[Q]uit** the process and start from scratch.`
							].join('\n'),
						FOOTER: `type [s]ave, [q]uit, [b]ack, [d]elete or [p]ost.`,
						MISSING_TEXTS: `Either top or bottom text are not existing. We ran into a problem while creating the embed preview.`
					},
					SHOW_MEME: {
						LOOK_LIKE: name => `**This is what your meme \`[ ${name} ]\` looks like**:`,
						OPTIONS: [
							`__**Options:**__`,
							``,
							`  • **[L]ink** to post only the URL.`,
							`  • **[P]ost** to post the meme.`,
							`  • **[D]elete** to remove the meme from your repository.`
						].join('\n'),
						FOOTER: `type [q]uit, [l]ink, [d]elete or [p]ost.`
					},
					SUCCESSFULLY_SAVED: meme => `Successfully saved your new meme » ${meme.customName} « [${meme.id}] into your individual meme repository.`,
					SUCCESSFULLY_REMOVED: meme => `Successfully removed your meme **${meme.customName}** [${meme.id}] from your individual meme repository.`,
					MEME_ID_NOT_FOUND: 'Could not get the meme data for the respective ID or selected meme. Please try again.',
					ERROR_HANDLING: {
						TITLE: `⚠ There was an error! `,
						DESC1: badInput => `The meme name ${badInput} is already taken.`,
						DESC2: allowed => `This is not a valid option. Valid options are \`${typeof allowed === 'object' ? allowed.join('`, `') : allowed}\`.`,
						DESC3: (badInput, allowed) => `Your input \`${badInput}\` is not valid. Valid input is \`${allowed}\`.`,
						DESC4: (badInput, allowed) => `Your input \`${badInput}\` is not valid. Valid input is a number between \`${allowed}\`.`,
						UNKNOWN_ERROR: `Unknown error!`,
						RETURN_NOTICE: 'You can return to the edit menu, or quit.'
					},
					SELECT_MEME_TEMPLATE: 'Type the number to select a meme template.',
					SELECT_YOUR_MEME: 'Type the number to select one of your memes.'
				},
				URBAN: {
					HELP_DESCRIPTION: 'Search for words and phrases on urban dictionary.',
					HELP_EXTENDED: prefix => `${prefix}urban <term/phrase>`,
					NO_SEARCH_TERM: 'No search term provided!',
					DEFINITION: 'Definition',
					EXAMPLE: 'Example',
					AUTHOR: `Author`,
					NO_RESULTS: term => `No results found for \`${term}\`.`
				}
			},
			COMMANDS_GAMING: {
				GENERAL: {
					LOADING_MESSAGE: game => `**Loading** your **${game} stats**. Please have some patience with me 😅.`,
					NO_USERNAME_TITLE: game => `You have no username registered for **${game}**.`,
					NO_USERNAME_DESC: 'To register a username type:',
					NO_USERNAME_RESPONSE: 'You gave me no username to get stats. Please try again with a username.',
					NO_PLATFORM_TITLE: 'You gave me no platform to get stats for you.',
					NO_PLATFORM_DESC: 'Allowed platforms are.',
					NOT_ALLOWED_PLATFORM: 'Is not an allowed platform.',
					NO_DATA: 'There was no data returned by the API for the account you provided. Please try again later or with a different account information.',
					INVALID_IGN: 'IGN is not a valid in game name. Please replace **IGN** with your in game name and try again.',
					KILLS: 'Kills',
					DEATHS: 'Deaths',
					ASSISTS: 'Assists',
					STATS: 'Stats',
					SCORE: 'Score',
					TIME_PLAYED: 'Time Played',
					GAMES_PLAYED: 'Games Played',
					WINS: 'Wins',
					LOSSES: 'Losses',
					STREAK: 'Streak',
					WIN_RATIO: 'Win Ratio',
					USERNAME: 'Username',
					LAST_ONLINE: 'Last Online',
					CREATED_AT: 'Created At',
					GENERAL: 'General',
					STEAM: 'Steam',
					INFO: 'Info',
					LEVEL: 'Level',
					TIER: 'Tier',
					OVERALL: 'Overall',
					RANKED: 'Ranked',
					CASUAL: 'Casual',
					ROLE: 'Role',
					SEASON: 'Season',
					RANK: 'Rank',
					PLATFORM: 'Platform',
					XP: 'XP',
					LAST_UPDATED: 'Last Updated',
					VICTORY: 'Victory',
					DEFEAT: 'Defeat',
					DURATION: 'Duration',
					TIME: 'Time',
					TEAM: 'Team'
				},
				AOV: {
					HELP_DESCRIPTION: 'Customized command built for Arena of Valor.',
					HELP_EXTENDED: prefix => ['', `• \`${prefix}AoV IGN\` *Replace IGN with your in game name*.`],
					SERVER: 'Sorry, this is a custom command built only for the Arena of Valor server. To check it out please join: https://discord.gg/arenaofvalor.',
					NO_IGN: 'You did not provide any IGN. The format is **AoV IGN Region Rank** but replace IGN with your in game name.',
					INVALID_REGION: 'Region is not a valid server name. Please replace **Region** with your in game server.',
					INVALID_RANK: 'Rank is not a valid server name. Please replace **Rank** with your in game rank.'
				},
				REGISTER: {
					HELP_DESCRIPTION: 'Register usernames / IDs for all relevant games.',
					HELP_EXTENDED: ['» register usernames / IDs with `stats register/reg`.'].join('\n'),
					TITLE: '🎮** »»» Choose which game you want to register a [username] for**.',
					CSGO: '**Steam Community ID** or **Vanity Nickname**.',
					PUBG: 'PUBG Nickname',
					OW: 'battleTag#0000 <platform>',
					IGN: 'InGameName',
					SIEGE: 'InGameName Platform',
					NEED_INFO: type => `Please type the ${type} for the game.`,
					SELECTED: 'Selected Game',
					CHOSEN_NAME: 'Chosen Username',
					CHOSEN_PLATFORM: 'Chosen Platform',
					NO_NAME: 'No username was selected',
					PLATFORM: 'Platform Is Required',
					VALID_PLAT: 'Valid platforms are',
					EXAMPLE: 'Example',
					SPECIFIC: game => `${game} Specific Information`,
					OW_INPUT: 'For PC input <battletag#1234> <platformName>.',
					OW_CONS: 'For consoles input <PSN/XBL-username> <platformName>.',
					BAD_STEAM: 'STEAM-ID is not working as input.',
					UNKNOWN: 'If you are not sure about your vanity username or STEAM-ID.',
					BAD_CSGO_NAME: 'is no valid `VANITY URL NAME` to get a `STEAM ID`.',
					INVALID: 'Cannot get valid results for.',
					LOOKUP: 'Please get valid information from http://steamidfinder.com/lookup/.',
					SUCCESS_TITLE: (ign, game) =>
						`${!ign ? 'Removed' : 'Saved'} your account ${ign || ''} for ${game}. ${
							ign
								? 'Since this was your first time using the command, I have saved your information. You no longer need to enter an IGN to find your stats. To edit or remove your account simply use the register command.'
								: ''
						}`,
					NEED_IGN: 'What is the In Game Name you wish to register?',
					NEED_GAME: 'What is the **Game** you wish to register your account for?',
					NEED_PLATFORM: 'What is the **platform/region** you wish to register your account for?',
					NO_GAME: 'Please provide a game to remove your account for.',
					LIST_ACCOUNTS: accounts => `Here are your registered accounts:\n${accounts.join('\n')}`
				},
				VAINGLORY: {
					HELP_DESCRIPTION: 'Checks Vainglory stats.',
					HELP_EXTENDED: prefix =>
						[
							'» **Valid stats types**: `matches` `m` `h` `hero`',
							'',
							'» **To View Hero Statistics**',
							`  • \`${prefix}vainglory hero\` *To get the top hero meta globally*.`,
							`  • \`${prefix}vainglory hero na\` *To get the top hero meta in the NA region*.`,
							`  • \`${prefix}vainglory hero vox\` *To get Vox statistics*.`,
							'',
							'» **IF YOU HAVE A USERNAME / IGN REGISTERED**',
							`  • \`${prefix}vainglory\` *to get the general player stats of your registered username*.`,
							`  • \`${prefix}vainglory matches\` *to get your last 50 matches in an interactive menu*.`,
							'',
							'» **IF YOU DO NOT HAVE A USERNAME / IGN REGISTERED OR WANT TO GET STATS FOR ANOTHER PLAYER**.',
							'» just try with a `In Game Name`',
							`  • Example: \`${prefix}vg Skillz4Killz matches\``,
							'',
							'» **REGISTER USERNAMES / IGNs** with `register`'
						].join('\n'),
					COMMAND: 'Command',
					MODE: 'Mode',
					NOT_ALLOWED_TYPE: type => `Is not an allowed ${type} for Vainglory.`,
					ALLOWED: type => `Allowed ${type} are.`,
					EMBED_TITLE: 'Click Here For More Details At VGPRO.GG',
					DAYS: 'Days',
					MINUTES: 'Minutes',
					SECONDS: 'Seconds',
					LIFETIME: 'Lifetime Stats',
					TOTAL: 'Total Stats',
					AVG: 'Average Stats',
					RANK: 'Current Rank',
					LEADERBOARDS: 'Leaderboard Ranking',
					TEAM_STATS: 'Team Side Stats',
					KILL_PARTICIPATION: 'Kill Participation',
					CS: 'CS',
					RANKED3V3: '3v3',
					BLITZ: 'Blitz',
					RANKED5v5: '5v5',
					GLOBAL: 'Global',
					REGIONAL: 'Regional',
					BLUE: 'Blue',
					RED: 'Red',
					GAMES: 'Games',
					AKA: 'Also Known As',
					ACES: 'Aces',
					GOLD: 'Gold',
					KRAKENS: isKraken => isKraken ? 'Krakens' : 'Dragons',
					TURRETS: 'Turrets',
					KDA: 'KDA',
					KP: 'KP',
					CSMIN: 'CS/Min',
					JUNGLE: 'Jungle',
					NOT_ENOUGH_DATA: 'There was not enough data to calulcate meta statistics for the hero you provided.'
				}
			},
			COMMANDS_MODERATION: {
				NUKE: {
					RESPONSE: (count, filter, limit) => `🔥 **${count}** messages ${filter ? `(type: **${filter}**)` : ''} (limit: ${limit}).`
				},
				MODLOG: { ACTION: 'Action', WARNINGS: 'Warnings', MOD: 'Mod', USER: 'User', CASE: 'Case', MODERATOR: 'Moderator', MEMBER: 'Member', REASON: 'Reason' },
				BAN: {
					HELP_DESCRIPTION: 'Bans a user from the server.',
					EXTENDED_HELP: [
						'`<prefix>ban @user [number] [reason]`',
						'',
						'» do not write the brackets [] / <>, it stands for optional / mandatory arguments.',
						'',
						`To be able to ban/unban a user:`,
						`• the bots needs to have a role that has the permission to \`ban\``,
						`• that role has to be above the users highest role.`,
						`The bot will automatically check and ban or unban based on the current status of the user.`,
						``,
						`**ADVICE:** Place the bots role as high as possible to avoid missing permissions.`
					].join('\n'),
					NO_PERMS: 'Sorry, I do not have enough permissions to ban this user.',
					NO_REASON: 'You did not provide a reason to ban the user.',
					NEED_REASON_DESCRIPTION: 'You did not provide a reason to ban the user from the server. Please type a reason.',
					NEED_USER: 'You did not provide a user. Please provide a user by @user or the user ID.',
					SUCCESS: (user, reason, isBanned) => `${isBanned ? 'Unbanned' : 'Banned'} \`${user}\` from this guild ${reason ? `because of \n\`\`\`\n${reason}\n\`\`\`` : ''}`,
					BAN_TITLE: (guildName, isBanned) => `you have been ${isBanned ? 'unbanned' : 'banned'} from [**${guildName}**]`,
					TOO_LOW: 'Your highest role is not high enough to ban this member.',
					ALREADY_BANNED: 'The user you provided has already been banned from this server. To unban them, please use the **unban** command.'
				},
				KICK: {
					HELP_DESCRIPTION: 'Kicks a user from the server.',
					EXTENDED_HELP: [
						'`<prefix>kick @user [reason]`',
						'',
						'» Do not write the brackets [] / <>, it stands for optional / mandatory arguments.',
						'» `Reason` can also be defined later with the **reason** command.',
						'',
						`To be able to kick a user:`,
						`• The bots needs to have a role that has the permission to \`kick\``,
						`• That role has to be above the users highest role`,
						``,
						`**ADVICE:** Place the bots role as high as possible to avoid missing permissions.`
					].join('\n'),
					NEED_MEMBER_TITLE: 'Who would you like to kick from the server?',
					NEED_MEMBER_DESCRIPTION: 'You did not provide a user to kick the member from the server. Please provide a user by @user or by giving their user ID.',
					NEED_REASON_DESCRIPTION: 'You did not provide a reason to kick the member from the server. Please type a reason.',
					UNKICKABLE: "I don't have the necessary permissions to be able to kick this member.",
					KICKED: (member, msg, fullReason) =>
						`**${member.nickname || member.user.tag}** has been \`kicked\` by \`${msg.member.nickname || msg.author.username}\`, because of \n\`${fullReason}\`.`,
					KICK_TITLE: guildName => `You have been kicked from [**${guildName}**]`,
					TOO_LOW: 'Your highest role is not high enough to ban this member.',
					NO_MEMBER: 'You did not provide a member to kick. Please try again.',
					NO_REASON: 'You did not provide a reason to kick the member. Please try again.'
				},
				MAIL: {
					HELP_DESCRIPTION: 'Send a mail to the support team on a server if they have enabled this feature.',
					EXTENDED_HELP: [
						'`Mail (your text here)` *create a new mail to the admins/mods*.',
						'`Mail reply (your text here)` *reply from the DM to the mail*.',
						'',
						'**Only ADMINS/MODS (only works in the mail-channel):**.',
						'`Mail reply (your text here)` *reply to the user that asked the question*.',
						'`Mail close (your text here)` *close the dialogue*.'
					].join('\n'),
					NOT_MADE_IN_SERVER: 'A mail must be created inside a server so the bot knows which server to send to. Afterwards you can send messages in your DM.',
					NOT_ENABLED: 'The mod-mail feature is not enabled on this server.',
					MAILBOX_FULL: 'The server mail box is currently full. Please try again later or try contacing the server mods/admins to make some space.',
					MAX_SENT: 'Your maximum amount of mails has been reached for this server. Please wait until some of your mails are closed before trying again.',
					BLOCKED: 'You were blocked from using the mail feature on this server.',
					NO_MESSAGE_REQUEST: 'You did not provide a message to send. Please enter now the message you wanted to write.',
					NO_CHANNEL_TO_CLOSE:
						'This is not a Moderation Mail channel that can be closed. If the channel still exists, please remove it manually and report a bug to my developers.',
					RETRY_MESSAGE: 'What is the message you would like to send?.',
					TOPIC: 'What would you like to use as the topic for the mail? **Between 2-100 characters**',
					NO_CHANNEL_MADE: ' I do not have the proper permissions to make a channel for the mail. Please contact the mods/admins of the server to grant me the proper permissions.',
					SENT: 'Your mail has been sent. You will receive the reply in a direct message from the bot once a reply is made. Cheers!',
					NOT_VALID_CHANNEL_DESC: 'This is not a valid Mail channel. This channel is not in the mail channels on the server.',
					REPLY_AUTHOR: 'replied to this mail on.',
					REPLY_TITLE: 'Topic',
					REPLY_DESC: 'To reply back, type **.mail reply responseGoesHere**  below.',
					REPLY_SECOND_MESSAGE_COMMAND: 'mail reply',
					REPLY_SECOND_MESSAGE_TEXT: '<your text here>',
					REPLY_SENT: 'Your mail has been sent to the user.',
					REPLY_SENT_DM: 'Your mail has been sent to the support team. Once they reply, the message will be sent here.',
					CLOSE_AUTHOR: 'This mail has been closed.',
					CLOSE_DESC: 'Please use the `mail` command in the server if you wish to send a new mail.',
					CLOSE_REASON: 'The mail was closed.',
					STATUS_CHANGED: 'Mail feature is now.',
					STATUS_CHANGE_ERROR: status => `Mail feature is already **${status}**.`,
					NO_NEW_MAIL_IN_MAIL_CHANNELS: 'Sorry, you can not create a new mail in an existing mail channel.',
					NO_DM_PERMS: 'This user has blocked Direct Messages and I am unable to send this mail to the user.'
				},
				REASON: {
					HELP_DESCRIPTION: 'Update a mod log reason or belated adding of a reason.',
					HELP_EXTENDED: 'Example: !reason 1 some new text.',
					NO_ID: 'You did not provide a valid modlog ID # to change the reason.',
					NO_REASON: 'You have to provide a new reason to change the modlog reason.',
					MODLOG_OFF: 'The mod log features are currently disabled. Please enable the feature first.',
					UPDATED_BY: 'Updated by:',
					MISSING_PERM: 'The bot is missing **READ MESSAGE HISTORY** permissions in the mod log channel. Please change the permissions and try again.',
					RESPONSE_SUCCESS: 'Updated reason for Moderation Log Entry 💼.',
					RESPONSE_MESSAGE_MISSING: 'Could not update the reason of the modlog entry since the message is not existing anymore.',
					RESPONSE_ERROR: 'Cannot edit the mod log message because it was not created by me.'
				},
				WARN: {
					HELP_DESCRIPTION: 'Warns, lists or removes a warn.',
					HELP_EXTENDED: [
						'•  `<prefix>warn add @user` [reason] (adds new warning).',
						'•  `<prefix>warn remove @user` (removes last warning).',
						'•  `<prefix>warn removeall @user` (removes all warnings).',
						'',
						'» Do not write the brackets [] / <>, it stands for optional / mandatory arguments.',
						'» `Reason` can also be defined later with the `reason` command.',
						'',
						`To be able to warn a user:`,
						`• That role has to be above the users highest role.`,
						`• Moderation has to be enabled in the guild settings.`,
						``,
						`**ADVICE:**`,
						`• Place the bots role as high as possible to avoid missing permissions.`,
						`• Enable moderation in the guild settings to enable the warn feature.`
					].join('\n'),
					NO_ACTIONS: actions => `You have to provide one of the mandatory actions. Possible actions are: \`${actions.join('`, `')}\``,
					NO_STATUS: 'You **cannot use the warn feature** until you **turn on** the moderation feature. Please check the settings menu to turn it on.',
					NO_CHANNEL: 'You **cannot use the warn feature** until you select a **mod-log channel**. Please check the settings menu to select one.',
					NO_USER: 'You have to mention a user / give me an user ID to make this happen.',
					NO_REASON: 'You have to provide a reason to warn the user.',
					AUTOMOD: 'AUTO-MODERATION',
					MAXED_WARNINGS_PASSED: '**Reason:** Surpassed maximum of Warnings.',
					NOT_KICKABLE: 'Could not be `kicked` for exceeding the maximum amount of warnings.',
					MAX: 'max',
					KICKED: 'has been `kicked` for reaching the maximum amount of warnings by.',
					KICKED_TITLE: 'You have been kicked from the server.',
					ROLE_GIVEN: 'Has been given the role for exceeding the maximum amount of warnings.',
					ROLE_GIVEN_TO_USER: 'You have been given the role because you reached the maximum amount of warnings.',
					NO_ROLE_AVAILABLE: 'Could not be `warned` due to the role missing for auto-moderation, maximum amount of warnings reached.',
					WARNED: (amount, strNo) => `has been \`warned\`, this was the \`${amount}${strNo}\` warning.`,
					USER_EMBED_TITLE: 'You have been [warned] on the server.',
					WARNING: 'warning.',
					REMOVED: 'The last warning has been removed for ',
					REMAIN: 'warnings remain',
					REMOVE_USER_DESC: 'Your last warning has been removed on:',
					REMOVE_ROLE: 'No longer surpassing the maximum amount of warnings on this server.',
					NO_WARNS: 'has no warnings that can be removed!',
					ALL_REMOVED: 'All warnings have been `removed` for',
					ALL_REMOVED_USER: 'All your warnings have been removed on the server: ',
					NO_REASON_SAVED: 'No Reason Given',
					WARNED_ON: 'warned on',
					TOO_LOW: 'Your highest role is not high enough to warn this member.'
				},
				NICK: {
					HELP_DESCRIPTION: 'Easily change the nickname of a member on your server.',
					HELP_EXTENDED: ['• `nick @Skillz4Killz pleball` *Changes the nickname of the user to pleball.*', '', '• Will require **MANAGE_NICKNAME** permissions on the bot.'].join(
						'\n'
					),
					NO_PERMS: user => `You are not able to change the nickname for ${user} because they have a higher role than you.`,
					SUCCESS: (user, name) => `Nickname for ${user} has been changed to **${name}**.`,
					NO_NICK: 'You did not provide any new nickname so I can not change it. Please provide a nickname next time.',
					TOO_LOW: "Your highest role is not high enough to edit this member's nickname.",
					NEED_NICK: 'What is the nickname you would like to assign to the user.',
					NEED_USER: 'Whos nickname would you like to edit?\n\nPlease provide the member by @member or member ID.',
					NO_REASON: 'You did not provide any reason to change the nickname, please try again.',
					CHANGED_SELF: nickname => `You have successfully changed your nickname to **${nickname}**.`
				},
				ROLEMEMBERS: {
					HELP_DESCRIPTION: 'Gets a list of members in the role and the role info.',
					HELP_EXTENDED: [
						'** Methods to show All Members having that ONE Role**',
						'• `rm @role`',
						'• `rm rolename`',
						'• `rm "role name" *use quotation marks when the rolename has spaces*.`',
						'',
						'** Methods to show All Members having that MULTIPLE Roles**:',
						'• `rm @role @role`',
						'• `rm rolename @role`',
						'• `rm "role name" rolename`',
						'',
						'» As you can see, the different methods can be combined.',
						'» Use quotation marks when the rolename has spaces.'
					].join('\n'),
					NO_ROLES: 'You have to provide atleast one role, silly. You can either @role or just type the role name.',
					SINGLE_DISPLAY_AUTHOR: roleNames => `List Of Members In The Roles: [ ${roleNames} ]`,
					SINGLE_LOADING: `Loading list of members...`,
					FOOTER: (showing, total) => `Showing ${showing} members of ${total}.`,
					ROLE_ID: ids => `**Role IDs**: ${ids}`,
					EVERYONE_FAIL: 'You know I cannot do that for you, the everyone role is untouchable :smirk:'
				},
				MUTE: {
					HELP_DESCRIPTION: 'Mute a member in either voice, text or both channels.',
					HELP_EXTENDED: prefix =>
						[
							'Muting will always take into account the default timer as per server settings unless specified.',
							'',
							'To mute on text channels only:',
							`•  ${prefix}mute @member text reason.`,
							'',
							'To mute on voice channels only:',
							`•  ${prefix}mute @member voice reason.`,
							'',
							'To mute on both text and voice channels:',
							`•  ${prefix}mute @member reason.`,
							'', // 'To mute with a timer, like 25 minutes:', // ` 	${prefix}mute @member text 25 reason`, // '» do not write the brackets [] / <>, it stands for optional / mandatory arguments', // '',
							'» Users cannot avoid mute by leaving and rejoining!'
						].join('\n'),
					NO_MEMBER: 'Member must be @mentioned or valid user id.',
					NEED_MEMBER: 'Please provide a user to mute/unmute with @user or user ID.',
					NEED_REASON: 'Please provide the reason to mute/unmute this user.',
					NO_REASON: 'Mute was not successful as you did not provide a reason.',
					NO_TEXT_ROLE: 'There is no *text* muted role saved in G4M3Rs settings. You have to set a role in the **settings** command to mute a user.',
					NO_VOICE_ROLE: 'There is no *voice* muted role saved in G4M3Rs settings. You have to set a role in the **settings** command to mute a user.',
					NO_MUTE_ROLES: 'You have not set any roles to be used as the muted roles on this server.',
					TOO_LOW: 'Your highest role is not high enough to mute this member.',
					SUCCESS: (isMuted, member) => `You have successfully **${isMuted ? 'unmuted' : 'muted'}** ${member}`,
					MEMBER_SUCCESS: {
						DESC: isMuted => `You are **${isMuted ? 'now unmuted' : 'permanently muted'}**`,
						FIELD1_NAME: `MODERATOR:`,
						FIELD1_VALUE: moderatorTag => `\`${moderatorTag}\``,
						FIELD2_NAME: `SERVER:`,
						FIELD2_VALUE: serverName => `\`${serverName}\``,
						FIELD3_NAME: `REASON:`,
						FIELD3_VALUE: reason => `\`\`\`\n${reason}\n\`\`\``
					}
				},
				TIMEMUTE: {
					HELP_DESCRIPTION: 'Mute a member in either a voice, text or both channels.',
					HELP_EXTENDED: prefix =>
						[
							'Muting will always take into account the default timer as per server settings unless specified.',
							'',
							'To mute on text channels only:',
							`• ${prefix}tmute @member text duration reason.`,
							'',
							'To mute on voice channels only:',
							`• ${prefix}tmute @member voice duration reason.`,
							'To mute on both text and voice channels:',
							`• ${prefix}tmute @member duration reason.`,
							'',
							'> Users cannot avoid temporary mute by leaving and rejoining!',
							'',
							'» Users cannot avoid mute by leaving and rejoining!'
						].join('\n'),
					NO_TIME: 'You forgot to give me the duration of the temporary mute. Please enter it.',
					SUCCESS: (isMuted, member, duration, reason) =>
						[
							`You have successfully **${isMuted ? 'unmuted' : 'temporary muted'}** ${member} **${isMuted ? `after ${duration}` : `for ${duration}`}** ${
								isMuted ? '' : `because of \`${reason}\``
							}`,
							'',
							`The respective member has been notified via DM.`
						].join('\n'),
					UNMUTE_SUCESS: (member, duration) =>
						[`${member} is now successfully **unmuted** after being silent for **${duration}**.`, '', `The respective member has also been notified via DM.`].join('\n'),
					MEMBER_SUCCESS: {
						DESC: (isMuted, duration) => `You are **${isMuted ? 'now unmuted' : 'temporary muted'} ${isMuted ? `after ${duration}` : `for ${duration}`}**.`,
						FIELD1_NAME: `MODERATOR:`,
						FIELD1_VALUE: moderatorTag => `\`${moderatorTag}\``,
						FIELD2_NAME: `SERVER:`,
						FIELD2_VALUE: serverName => `\`${serverName}\``,
						FIELD3_NAME: `REASON:`,
						FIELD3_VALUE: reason => `\`\`\`\n${reason}\n\`\`\``
					},
					UNMUTE_REASON: 'The time for the temporary mute went by so fast...',
					TOO_LOW: 'Your highest role is not high enough to temporary mute this member.',
					ALREADY_MUTED: (member, duration) => `The member ${member.displayName} (${member.id}) has already a temporary mute. This mute will be removed in ${duration}.`
				}
			},
			COMMANDS_SUBSCRIPTIONS: {
				TWITCH: {
					HELP_DESCRIPTION: 'Enable/Disable twitch notifications.',
					HELP_EXTENDED: prefix => [`\`${prefix}twitch add <Twitch username>\``, `\`${prefix}twitch remove <Twitch username>\``, `\`${prefix}twitch list\``].join('\n'),
					MISSING_USERNAME: 'Please provide a Twitch Username.',
					NO_SUBSCRIPTIONS: "Sorry, you don't have any Twitch Subscriptions on this server.",
					SUBSCRIPTION_TITLE: 'List of subscribed Twitch Users',
					USER_NOT_EXIST: user => `Sorry, \`${user}\` does not exist.`,
					SUBBED: user => `Successfully subscribed to \`${user}\`.`,
					ALREADY_SUBBED: user => `You are already subscribed to \`${user}\`.`,
					NOT_SUBSCRIBED: 'Sorry, the user you provided has not been subscribed to on this server.',
					REMOVE_SUCCESS: user => `You have successfully removed \`${user}\` from your subscriptions on this server.`,
					LIST_TITLE: 'Theses are your server`s subscriptions.'
				}
			},
			COMMANDS_UTILITY: {
				FEEDBACK: {
					HELP_DESCRIPTION: 'Send a type of feedback like an idea or bug to your server or to the G4M3R bot developers.',
					HELP_EXTENDED: prefix => [
						`\`${prefix}fb idea\` *Sends a message to your servers suggestion channel.*`,
						'',
						`\`${prefix}fb bug\` *Sends an issue/bug/problem to your servers bug channel.*`,
						'',
						`\`${prefix}fb dev\` *Sends a message to the G4M3R bot developers.*`
					],
					NEED_TYPE: [
						'To send an idea/suggestion to the server please type `idea`.',
						'',
						'To send an issue/problem/bug to the server please type `bug`.',
						'',
						'To send feedback to the G4M3R bot developers please type `dev`.'
					].join('\n'),
					NEED_CONTENT: 'What message would you like to send?',
					SENT: 'Your message has been sent successfully!',
					NOT_ACTIVATED: type => `The **${type} feedback** is not enabled on this server. Please talk to your moderators to enable this feature.`
				},
				TAGS: {
					HELP_DESCRIPTION: 'Create and manage the custom made tags for your server.',
					HELP_EXTENDED: [
						'`tag` *list all available tags on your server*.',
						'`<tagName> (without prefix) *use the tag*.`',
						'',
						'The management of tags is dependant from the permission settings.',
						'`tag add` Begins a step by step process to **create** a new tag. It will first ask for a name which supports multiple words. Then you will choose a type of tag and finally provide the content for the tag.',
						'`tag remove <tagName>` *remove a tag from the list*.'
					].join('\n'),
					NOT_ALLOWED_PERM: (action, allowedFor) => `**${action}** tags is only allowed for \`${allowedFor}\`.`,
					MISSING_NAME: 'You have to provide a `TAG NAME` to use this action.',
					NO_NAME: 'You have to provide a **tag name** to create a tag!',
					NO_CONTENT: 'You have to provide **content** to create a tag!',
					BAD_EMBED: 'This was not a **valid embed object**. Best is to use the embed builder <https://embedbuilder.nadekobot.me/>!',
					SAVED_TAG: tagID => `A new tag has been saved on your server with the ID: **[${tagID}]**.`,
					EXISTS: tagName => `Tag \`${tagName}\` already exists on this server.`,
					WRONG_ID_NAME: (type, tagIDOrName) => `I was unable to find a tag on this server with the provided ${type}: **[${tagIDOrName}]**.`,
					REMOVED: 'I **removed** the following tag from the server:',
					ORIGINAL: 'This is the original content of your tag.',
					NO_TAGS: 'You have **not made any tags** on this server yet!',
					NUMBER_TO_VIEW: 'Type the **number** to view the tag.',
					MORE_PAGES: 'What is the code for the next page of the story?'
				},
				STORIES: {
					HELP_DESCRIPTION: 'Create and manage your custom made stories for your server.',
					HELP_EXTENDED: [
						'`stories` *list all available stories*.',
						'`<storyName> (without prefix) *show your story*`.',
						'',
						'Who can manage the stories depends on the server permission settings.',
						'`stories add <storyName> <content>` *create a new tag*.',
						'`stories remove <storyName>` *remove a tag from the list*.'
					].join('\n'),
					NOT_ALLOWED_PERM: (action, allowedFor) => `**${action}** stories is only allowed for \`${allowedFor}\`.`,
					MISSING_NAME: 'You have to provide a **`STORY NAME`** to use this action.',
					MISSING_ID: 'You have to provide a **`STORY ID`** to use this action.',
					NO_NAME: 'You have to provide a **story name** to create a story!',
					NO_CONTENT: 'You have to provide **content** to create a story!',
					BAD_EMBED: 'You are not using a **valid embed object**. Best is to use the embed builder <https://embedbuilder.nadekobot.me/>!',
					SAVED_TAG: storyID => `A new story has been saved on your server with an ID of: **[${storyID}]**`,
					EXISTS: storyName => `story \`${storyName}\` already exists on this server.`,
					WRONG_ID_NAME: (type, storyIDOrName) => `I was unable to find a story on this server with the provided ${type}: **[${storyIDOrName}]**.`,
					REMOVED: 'I **removed** the following story from the server:',
					ORIGINAL: 'This is the original content of your story.',
					NO_TAGS: 'You have **not made any story** on this server yet silly!',
					NUMBER_TO_VIEW: 'Type the **number** to see that story.',
					MORE_PAGES: 'What is the code for the next page of the story?',
					FIRST_PAGE: 'You did not provide any content for the first Page. What is the code for the first page of the story?',
					STORY_SHOW_TITLE: `These are your story pages.`,
					SUCCESSFULLY_REMOVED: story => `Successfully **removed your story** \`[${story.id}] ${story.name}\`.`
				},
				EMBED: {
					HELP_DESCRIPTION: 'Makes an embed from the embed object you input.',
					HELP_EXTENDED: [
						'',
						'**» Two options to create an embed:**',
						`  • \`embed @user <embedObject from Nadeko embed builder>\``,
						`  • \`embed <embedObject from Nadeko embed builder>\``,
						`Using @user is only relevant if you use one of the USER variables.`,
						``,
						`**» Possible variables that will be replaced by the bot:**`,
						'  • `%author%`, `%authorimage%`, `%authormention%`',
						'  • `%user%`, `%userimage%`, `%usermention%`',
						'  • `%guild%`, `%guildimage%`',
						'',
						'**»** User variables only work when mentioning a user together with the command.',
						'**»** Guild variables only work when command is used in a guild channel.',
						'',
						'**CREATE YOUR EMBED OBJECT ON THIS WEBSITE: <https://embedbuilder.nadekobot.me/>**.'
					].join('\n'),
					NO_EMBED: 'You are missing the embed code. Please create the {embedcode} using <https://embedbuilder.nadekobot.me/>.',
					BAD_EMBED: 'The object you provided is not a valid embed.'
				},
				IMGUR: {
					HELP_DESCRIPTION: 'Upload an image to imgur and receive a link.',
					HELP_EXTENDED: [
						'» Upload an image to imgur by:',
						'  • Using a url.',
						'  • Uploading a picture to discord.',
						'',
						'» If uploading a picture to discord, write `<prefix>imgur` in the upload comment field.',
						'» If using a url please ensure that the url ends with a common picture file extension.',
						'',
						'**» Examples:**',
						'`.imgur https://goo.gl/XY5vbq` will **not** work.',
						'`.imgur http://i.imgur.com/z0LoCtz.png` will work.'
					].join('\n'),
					IMGUR_LINK: 'This is your imgur link!',
					FAILED: 'Failed to upload the file to imgur, please try again.',
					INVALID_URL: 'The URL you provided is not a valid URL.',
					BAD_ATTACHMENT: 'The image you provided is not a valid image.',
					NO_INPUT: 'You need to provide a url or attach an image when using this command.'
				},
				ROLE: {
					HELP_DESCRIPTION: 'Adds/removes a role from the self assignable list to yourself.',
					HELP_EXTENDED: [
						'**Examples:**',
						'`role`',
						' *Lists all roles available for self-assignment.*',
						'',
						'`role roleName`',
						'*Adds or removes a role to you.*',
						'',
						'**ADMIN / MOD ONLY**',
						'`role roleName @user`',
						'*Adds or removes a role to the specified user.*'
					].join('\n'),
					NO_ROLES: type => `There are no **${type} roles** on the server.`,
					PAGE_TITLE: 'Type the respective number to self-assign / remove that role.',
					LOADING: 'Loading role list...',
					NEED_NUMBER: max => `Type the number of the role you would like to add or remove. Between 1 and ${max}.`,
					EDITED: (added, role, member) => `You successfully ${added ? 'ADDED' : 'REMOVED'} the role ${role}${member ? ` ${added ? 'from' : 'to'} ${member}.` : '.'}.`,
					NO_PERMS: 'You do not have the necessary permissions to assign these roles.',
					NO_ROLE: roleName => `The role \`${roleName}\` does not exist on your server!`,
					NOT_SA: roleObject => `The role ${roleObject} is **not self assignable**!`
				},
				SHORTCUT: {
					HELP_DESCRIPTION: 'Create or remove shortcuts to do commands for your account (in DM) or your server.',
					HELP_EXTENDED: prefix =>
						[
							'Aliases are shortnames / different names of the same command that you can create and run instead of the existing ones.',
							'',
							'**Guild Alias Example:**',
							`\`${prefix}shortcut add na role na\``,
							`This will run the *${prefix}role na* command whenever someone types just *${prefix}na*. This will only be on your server.`,
							'',
							'**User Alias Example: (MUST BE IN PRIVATE MESSAGE)**',
							`\`${prefix}shortcut add vgh vainglory hero\``,
							`This will create an shortcut for your account allowing you to use the *\`${prefix}vainglory hero\`* command just by typing *\`${prefix}vgh\`* on ANY server that the bot is on, just for you :wink:.`,
							''
						].join('\n'),
					NEED_SHORTCUT: action => `What is the shortcut you would like to \`${action}\`?`,
					NO_SHORTCUT: 'You did not provide any shortcut.',
					NO_SHORTCUT_EXIST: prefix => `You did not create any shortcuts yet. Please type \`${prefix}shortcut add\` to create one.`,
					NOT_VALID_SHORTCUT: 'The shortcut you provided does not exist.',
					NEED_COMMAND: ['What is the command (including arguments) you would like to save for this shortcut?', '', 'Example: `role news` or `events create` or `help all`.'].join(
						'\n'
					),
					NO_COMMAND: 'You did not provide any command to work with your shortcut.',
					NOT_VALID_COMMAND: 'The command you provided does not exist.',
					ALREADY_EXISTING_TERM: term => `The shortcut you provided is an already existing \`${term.toUpperCase()}\`. Please use another term for your shortcut.`,
					REMOVE_SUCCESS: shortcut => `The shortcut **${shortcut.name}** has been **removed** successfully.`,
					ADD_SUCCESS: shortcut => `The shortcut **${shortcut.name}** has been **added** successfully.`
				},
				REACTIONROLES: {
					HELP_DESCRIPTION: 'Create super simple reaction role messages!',
					HELP_EXTENDED: settings =>
						[
							'Reaction Roles are the easiest way of creating a message with reactions where, when clicked, you get a role.',
							'',
							'Feel free to create an embed for this command using **https://embedbuilder.nadekobot.me/**.'
						].join('\n'),
					NO_PERM: "You don't have permission to do that!",
					NO_RR_NAMED: name => `I couldn't find any reaction role named ${name}.\nDouble check your spelling or your capitalization, and try again.`,
					DELETED: name => `${name} has been deleted.`,
					SUMMONED: (name, channel) => `Easy peasy, lemon squeezy!\nThe reaction role named ${name} was initalized in ${channel}.`,
					LIST: roles => roles.join(' 🔹 '),
					LIST_TITLE: count => `This server has ${count} reaction role${count === 1 ? '' : 's'}.`,
					NO_RR: `This server doesn't have any reaction roles... 😔`
				}
			},
			INHIBITORS: {
				BLACKLISTED: {
					BANNED: 'You are on my **naughty list** meaning you are globally banned. Should not have abused me so much. 😢',
					BANNED_GUILD: 'This guild is on my **naughty list** meaning its globally banned. Should not have abused me so much. 😢'
				},
				COOLDOWN: {
					TITLE: author => `${author}, you are using this command too quickly!`,
					DESC: (remaining, guildDelete) =>
						`Please wait for at least **${remaining} seconds** before you try again.${guildDelete ? '*Once this message deletes itself you can use the command again.*' : ''}`
				},
				G4M3R_PERMISSIONS: {
					SERVER: name => `The usage of the command \`${name}\` is **not allowed** on this server.`,
					CHANNEL: name => `The usage of the command \`${name}\` is **not allowed** in this channel.`,
					ROLE: (name, role) => `The usage of the command \`${name}\` is **not allowed** for the role \`${role}\`.`
				},
				PERMISSIONS: { NO_PERMS: 'Sorry, you do not have the necessary permissions to use this command.' }
			},
			EVENTS: {
				GUILDCREATE: {
					AUTHOR: 'Thank You For Inviting G4M3R!',
					FIELDS: { WIKI: { NAME: 'G4M3R Wiki' }, HELP: { NAME: 'Need Help? Get Support!', VALUE: 'Join the support server and ask for help anytime at http://support.g4m3r.xyz' } }
				},
				GUILDMEMBERADD: { MUTE_REASON: 'A muted member rejoined the server so I went ahead and kept them muted :wink:.' },
				ROLECREATE: { NAME: 'Name', WAS_CREATED: (roleName, executor) => `[ ${roleName} ] was created${executor ? ` by ${executor}` : ''}!`, ROLE_ID: 'Role Id' },
				ROLEDELETE: { WAS_DELETED: (roleName, executor) => `[ ${roleName} ] was deleted${executor ? ` by ${executor}` : ''}!`, ROLE_ID: 'Role Id', NAME: 'Name' },
				ROLEUPDATE: {
					WAS_UPDATED: (executor, roleName) => `[ ${roleName} ] was updated${executor ? ` by ${executor}` : ''}!`,
					OLD_ROLE: 'Old role',
					NEW_ROLE: 'New role',
					ROLE_NAME: 'Name',
					ROLE_COLOR: 'Color',
					ROLE_PERMS: 'Permissions',
					REASON: 'Reason'
				},
				MEMBERADD: {
					MEM_JOINED: username => `${username} has joined the server!`,
					USER_ID: 'User ID',
					NAME: 'Username',
					CREATED_AT: 'Account Created',
					JOINED: 'Joined On',
					POSITION: 'Position'
				},
				MEMBERREMOVE: {
					MEM_LEFT: username => `${username} has left the server!`,
					USER_ID: 'User ID',
					NAME: 'Username',
					LEFT: 'Left On',
					ROLES: 'Member Roles',
					POSITION: 'Position'
				},
				CMDRAN: { CMD_RAN: username => `${username} used a command.`, USER_NAME: 'User', USER_ID: 'User ID', NAME: 'Command', TAG: 'Tag', STORY: 'Story' },
				MSGDELETED: {
					MSG_DELETED: executor => `A message was deleted${executor ? ` by ${executor}` : ''}!`,
					MESSAGE: 'Message content',
					USER_NAME: 'User',
					USER_ID: 'User ID',
					SENT: 'Message sent at'
				},
				MSGUPDATED: {
					MSG_UPDATED: username => `${username} edited a message.`,
					OLD_MESSAGE: 'Old message',
					NEW_MESSAGE: 'New Message',
					USER: 'User',
					USER_ID: 'User ID',
					MESSAGE_ID: 'Message ID',
					SENT: 'Message Sent',
					EDITED: 'Messaged Edited',
					URL: 'URL To Message'
				},
				EMOJICREATED: { EMOJI_CREATED: username => `${username} created an emoji!`, NAME: 'Emoji Name', ANIMATED: 'Animated Emoji', USER_NAME: 'Creator', USER_ID: 'User ID' },
				EMOJIDELETED: {
					EMOJI_DELETED: username => `${username} deleted an emoji!`,
					NAME: 'Emoji Name',
					ANIMATED: 'Animated Emoji',
					USER_NAME: 'Creator',
					USER_ID: 'User ID',
					URL: 'URL To Image'
				},
				CHANNEL: {
					WAS_CREATED: (channelName, executor) => `[ ${channelName} ] was created${executor ? ` by ${executor}` : ''}!`,
					WAS_DELETED: (channelName, executor) => `[ ${channelName} ] was deleted${executor ? ` by ${executor}` : ''}!`,
					NAME: 'Channel name',
					TYPE: 'Channel type',
					CHANNEL_ID: 'Channel ID',
					CATEGORY: 'Category',
					REASON: 'Reason'
				},
				GUILD_MEMBER_UPDATED: {
					MEMBER_INFO: 'Member',
					CHANGED_NICK: (executor, username) => `${username} nickname was changed${executor ? ` by ${executor}` : ''}!`,
					REASON: 'Reason',
					MEMBER_ID: 'Member ID',
					MOD_ID: 'Moderator ID',
					ROLE_UPDATE: (executor, added) => `${executor ? `${executor} ` : ''}${added === 'Added' ? 'added' : 'removed'} a role!`
				},
				GUILD_BAN: {
					BANNED: (executor, username) => `${username} has been banned${executor ? ` by ${executor}` : '.'}`,
					UNBANNED: (executor, username) => `${username} has been un-banned${executor ? ` by ${executor}` : '.'}`,
					MEMBER_ID: 'Member ID',
					USER_ID: 'Moderator ID',
					REASON: 'Reason'
				}
			},
			MONITORS: {
				AUTOMOD: {
					CAPITAL_REASON: `Your message was deleted because you used too many **CAPITALS** in the message, as per the server settings.`,
					MENTION_REASON: 'Your message was deleted because there were too many **@ mentions** used in the message, as per the server settings.',
					DESTRUCT_REASON: 'This message was auto-deleted as it was a automoderation warning to a user.'
				},
				DMHELP: {
					FIELDS: {
						NAMES: {
							DEFAULT: `ℹ** | You need to use the bot's default prefix to execute commands via DM! This is .**`,
							ALL: prefix => `${prefix}help all`,
							COMMAND: prefix => `${prefix}help <commandName>`,
							SITE: 'https://g4m3r.xyz',
							DISCORD: 'https://discord.gg/mtJyQjW'
						},
						VALUES: {
							DEFAULT: `The default prefix is: \`${this.client.options.prefix}\``,
							ALL: prefix => `Type \`${prefix}help all\` to get an overview over all commands.`,
							COMMAND: prefix => `Type \`${prefix}help commandName\` to get specific help for the command 'commandName'.`,
							SITE: 'Visit our dashboard to get access to settings or check the wiki to get more information about G4M3R.',
							DISCORD: 'Visit our support discord server and ask for help.'
						}
					}
				}
			},
			TASKS: {
				EVENTSPROCESSOR: {
					START: {
						AUTHOR: (eventNumber, guildName) => `The event [ ${eventNumber} ] you joined on the server ${guildName} has now started!`
					},
					REMIND: {
						AUTHOR: eventNumber => `REMINDER FOR THE EVENT [${eventNumber}].`,
						DESC: (TITLE, STARTS, DURATION, JOINED, event, niceStart, niceDuration, attendees) =>
							[
								`**${TITLE}:** \`${event.title}\``,
								`**${STARTS}:** \`${niceStart}\``,
								`**${DURATION}:** \`${niceDuration}\``,
								`<:dotgreen:441301429555036160>\`[${event.attendees.length} / ${event.maxAttendees}]\`<:dotyellow:441301443337781248>\`[${
									event.waitingList.length
								}]\`<:dotred:441301715493584896>\`[${event.denials.length}]\``,
								'',
								`**${JOINED}**`,
								`\`${attendees}\``
							].join('\n'),
						FOOTER: guildName => `${this.language.BASICS.SERVER}: ${guildName}`
					}
				}
			},
			XP: {
				VALUE_TOO_LOW: val => `${val} is too small for XP per message.`,
				VALUE_TOO_HIGH: val => `${val} is too big for XP per message.`,
				LEVELUP: (member, { name, rewards: { roles } }) => {
					const rolenames = roles.length ? roles.map(r => (member.guild.roles.get(r) || { name: 'Unknown Role' }).name) : [];
					return [
						`Congratulations! You leveled up to ${name}!`,
						rolenames.length
							? `You earned the following role${rolenames.length === 1 ? '' : 's'}: ${[rolenames.slice(0, -1).join(', '), rolenames.slice(-1)].join(
								rolenames.length < 2 ? '' : ' and '
							  )}.`
							: undefined
					]
						.filter(i => i)
						.join('\n');
				},
				LEVELUP_GLOBALLY: levelName => `You just **globally** leveled up to **${levelName}** 👍.`,
				LOWER_THAN_BEFORE: 'The value you entered for XP needed is smaller than the preceding level.'
			},
			DEFAULT: key => {
				this.client.emit('error', `Missing Language Key: ${key} has not been localized for ${this.name} yet.`);
				return `${key} has not been localized for en-US yet.`;
			},
			MONITOR_COMMAND_HANDLER_REPROMPT_FOOTER: 'Type [q]uit to cancel the prompt.',
			MONITOR_COMMAND_HANDLER_ABORTED: "I've closed the prompt for you. 👌",
			MESSAGE_PROMPT_TIMEOUT: 'The prompt has timed out so I closed it for you. 👌'
		};
	}

};
