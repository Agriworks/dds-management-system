"use client";

import { MoreVertical } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Dialog from "@/components/dialog";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/multi-select";
import { getRoles } from "@/lib/api-client";
import { type AccessObject } from "@/lib/roles";
import React, { useState, useEffect } from "react";

type UserRow = {
  id: string;
  name: string;
  email: string;
  roles: string[];
};

interface Role {
  id: string;
  name: string;
  description: string | null;
}

function RolesEditor({
  currentRoles,
  onChange,
}: {
  currentRoles: string[];
  onChange: (next: string[]) => void;
}) {
  const [localRoles, setLocalRoles] = useState<string[]>(currentRoles);
  const [allRoles, setAllRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // load roles on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const roles = await getRoles();
        if (!mounted) return;
        setAllRoles(roles);
      } catch {
        if (!mounted) return;
        setError("Failed to load roles");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Select roles</label>
        <MultiSelector
          values={localRoles}
          onValuesChange={setLocalRoles}
          displayValues={Object.fromEntries(
            allRoles.map((r) => [r.name, r.name]),
          )}
        >
          <MultiSelectorTrigger>
            <MultiSelectorInput placeholder="Search roles..." />
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <MultiSelectorList>
              {loading ? (
                <div className="flex items-center justify-center py-4 px-3 text-sm text-muted-foreground">
                  Loading roles...
                </div>
              ) : error ? (
                <div className="py-4 px-3 text-sm text-destructive text-center">
                  {error}
                </div>
              ) : allRoles.length === 0 ? (
                <div className="py-4 px-3 text-sm text-muted-foreground text-center">
                  No roles available
                </div>
              ) : (
                allRoles.map((role) => (
                  <MultiSelectorItem key={role.id} value={role.name}>
                    <span className="font-medium">{role.name}</span>
                  </MultiSelectorItem>
                ))
              )}
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => onChange(currentRoles)}
        >
          Cancel
        </Button>
        <Button type="button" onClick={() => onChange(localRoles)}>
          Save
        </Button>
      </div>
    </div>
  );
}

function ActionsCell({
  row,
  onUpdateRoles,
  userPermissions,
}: {
  row: UserRow;
  onUpdateRoles: (id: string, roles: string[]) => void;
  userPermissions: AccessObject | null;
}) {
  const [open, setOpen] = useState(false);
  const canEditRoles = userPermissions?.contributor || userPermissions?.admin;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open actions">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            disabled={!canEditRoles}
            onSelect={(e) => {
              e.preventDefault();
              if (canEditRoles) {
                setOpen(true);
              }
            }}
          >
            Edit roles
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        dialogTitle="Edit roles"
        dialogDescription={`add or remove the roles to the user`}
      >
        <RolesEditor
          currentRoles={row.roles}
          onChange={(next) => {
            onUpdateRoles(row.id, next);
            setOpen(false);
          }}
        />
      </Dialog>
    </>
  );
}

export function createColumns(
  onUpdateRoles: (id: string, roles: string[]) => void,
  userPermissions: AccessObject | null,
): ColumnDef<UserRow>[] {
  return [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <span className="font-medium">{row.original.name}</span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "roles",
      header: "Roles",
      cell: ({ row }) => (
        <span className="text-muted-foreground">
          {row.original.roles.length > 0 ? row.original.roles.join(", ") : "-"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <ActionsCell
          row={row.original}
          onUpdateRoles={onUpdateRoles}
          userPermissions={userPermissions}
        />
      ),
      enableHiding: false,
      size: 48,
    },
  ];
}
