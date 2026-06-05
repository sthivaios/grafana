import config from 'app/core/config';

export default function getUserOAuthProviderDisplayName(authSource: string | 0 | undefined): string {
  if (authSource !== undefined && authSource !== 0) {
    return authSource === 'Generic OAuth' ? (config.oauth.generic_oauth?.name ?? '') : authSource;
  } else {
    return '';
  }
}
