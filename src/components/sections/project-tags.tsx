import React from 'react';

const ProjectTags = () => {
  const tagClassName = "text-xs font-medium uppercase tracking-wide text-foreground";

  return (
    <ul className="mt-8 flex flex-col gap-2">
      <li>
        <p className={tagClassName}>[ ABOUT PROJECTS ]</p>
      </li>
      <li className="flex flex-row gap-3">
        <div>
          <p className={tagClassName}>[ BRANDING IDENTITY ]</p>
        </div>
        <div>
          <p className={tagClassName}>[ DESIGN ]</p>
        </div>
      </li>
    </ul>
  );
};

export default ProjectTags;