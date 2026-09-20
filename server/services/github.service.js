const baseHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "Dhiraj-Kumar-Portfolio",
};

const getGithubUsername = () => {
  return (
    process.env.GITHUB_USERNAME ||
    "Offical-Dhiraj"
  );
};

const getGithubHeaders = () => {
  const headers = {
    ...baseHeaders,
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization =
      `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
};

export const getGithubProfile = async () => {
  const githubUsername = getGithubUsername();

  const response = await fetch(
    `https://api.github.com/users/${githubUsername}`,
    {
      headers: getGithubHeaders(),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error(
      "GitHub profile error:",
      response.status,
      errorText
    );

    throw new Error(
      `GitHub profile request failed: ${response.status}`
    );
  }

  const data = await response.json();

  return {
    login: data.login,
    name: data.name,
    avatar: data.avatar_url,
    bio: data.bio,
    profileUrl: data.html_url,
    repositories: data.public_repos,
    followers: data.followers,
    following: data.following,
  };
};

export const getGithubRepos = async () => {
  const githubUsername = getGithubUsername();

  console.log(
    "Fetching GitHub repositories for:",
    githubUsername
  );

  const response = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=20`,
    {
      headers: getGithubHeaders(),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error(
      "GitHub repositories error:",
      response.status,
      errorText
    );

    throw new Error(
      `GitHub repositories request failed: ${response.status}`
    );
  }

  const repos = await response.json();

  console.log(
    "GitHub repositories received:",
    repos.length
  );

  return repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url,
    updatedAt: repo.updated_at,
  }));
};