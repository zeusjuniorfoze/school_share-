import React from "react";
import { useTranslation } from 'react-i18next';

export const Team = (props) => {
  const { t } = useTranslation();

  const teamMembers = t('Team.members', { returnObjects: true });

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{t('Team.title')}</h2>
          <p>{t('Team.description')}</p>
        </div>
        <div id="row">
          {teamMembers
            ? teamMembers.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
