import { TeamMember as TeamMemberType } from "../lib/types";

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center p-6">
      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg className="w-10 h-10 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 className="font-heading text-lg font-bold text-primary mb-1">
        {member.name}
      </h3>
      <p className="font-body text-accent text-sm font-medium mb-3">
        {member.role}
      </p>
      {member.bio && (
        <p className="font-body text-foreground/60 text-sm leading-relaxed">
          {member.bio}
        </p>
      )}
    </div>
  );
}
